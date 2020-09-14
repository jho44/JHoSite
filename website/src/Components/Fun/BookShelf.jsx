import React from "react";
import axios from "axios";
import classNames from "classnames";
import jQuery from "jquery";

var createReactClass = require("create-react-class");

var BookShelf = createReactClass({
  getInitialState: function () {
    //this will hold all the data being read and posted to the file
    return { data: [] };
  },
  loadBooksFromServer: function () {
    axios.get("http://localhost:4000/books").then(
      (response) => {
        this.setState({ data: response.data });
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  componentDidMount: function () {
    this.loadBooksFromServer();
    //... and set an interval to continuously load new data:
    //   setInterval(this.loadBooksFromServer, this.props.pollInterval);
  },
  handleBookSubmit: function (book) {
    //this is just an example of how you would submit a form
    //you would have to implement something separately on the server
    axios
      .post("http://localhost:4000/book", {
        title: book.title,
        author: book.author,
        release_date: book.release_date,
        summary: book.summary,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  },
  render: function () {
    return (
      <div className="bookShelf">
        <h1>Book Shelf</h1>
        <BookList data={this.state.data} />
        <BookForm onBookSubmit={this.handleBookSubmit} />
      </div>
    );
  },
});

var BookList = createReactClass({
  render: function () {
    var bookNodes = this.props.data.map(function (book) {
      return (
        <Book
          title={book.title}
          author={book.author}
          summary={book.summary}
          release_date={book.release_date}
        />
      );
    });
    //print all the nodes in the list
    return <div className="bookList">{bookNodes}</div>;
  },
});

var Book = createReactClass({
  render: function () {
    return (
      <div className="book">
        <h2 className="bookTitle">TITLE: {this.props.title}</h2>
      </div>
    );
  },
});

var BookForm = createReactClass({
  getInitialState: function () {
    return {
      title: "",
      author: "",
      release_date: undefined,
      summary: "",
    };
  },
  handleSubmit: function (e) {
    //we don't want the form to submit, so we prevent the defaul behavior
    e.preventDefault();

    //we clean up the data as we save it
    var title = this.state.title;
    var author = this.state.author;
    var summary = this.state.summary;
    var release_date = this.state.release_date;

    //Here we do the final submit to the parent component
    this.props.onBookSubmit({
      title: title,
      author: author,
      release_date: release_date,
      summary: summary,
    });

    //Now that the form is submitted, we empty all the fields
    this.setState({
      title: "",
      author: "",
      release_date: undefined,
      summary: "",
    });
  },

  commonValidate: function () {
    //you could do something here that does general validation for any form field
    return true;
  },
  setValue: function (field, event) {
    //If the contributor input field were directly within this
    //this component, we could use this.refs.contributor.value
    //Instead, we want to save the data for when the form is submitted

    var object = {};
    if (field === "release_date") {
      object[field] = event;
      this.setState(object);
    } else {
      object[field] = event.target.value;
      this.setState(object);
    }
  },
  render: function () {
    //Each form field is actually another component.
    //Two of the form fields use the same component, but with different variables
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>!! Inserting a New Book !!</h2>

        <TextInput
          value={this.state.name}
          uniqueName="book_title"
          text="Book Title"
          textArea={false}
          required={true}
          minCharacters={1}
          validate={this.commonValidate}
          onChange={this.setValue.bind(this, "title")}
          errorMessage="Book title is invalid"
          emptyMessage="Book title is required"
        />
        <br />
        <br />

        <TextInput
          value={this.state.author}
          uniqueName="author"
          text="Author Name"
          textArea={false}
          required={true}
          minCharacters={1}
          validate={this.commonValidate}
          onChange={this.setValue.bind(this, "author")}
          errorMessage="Author name is invalid"
          emptyMessage="Author name is required"
        />
        <br />
        <br />

        <TextInput
          value={this.state.summary}
          uniqueName="summary"
          text="Cut of book summary"
          textArea={true}
          required={false}
          validate={this.commonValidate}
          onChange={this.setValue.bind(this, "summary")}
          errorMessage=""
          emptyMessage=""
        />
        <br />
        <br />

        <h4>Release Date</h4>
        <ReleaseDate
          value={this.state.release_date}
          onChange={this.setValue.bind(this, "release_date")}
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  },
});

/*
    This is a small error component that is displayed inline
    within every form field component
  */
var InputError = createReactClass({
  getInitialState: function () {
    return {
      message: "Input is invalid",
    };
  },
  render: function () {
    var errorClass = classNames(this.props.className, {
      "error_container": true,
      "visible": this.props.visible,
      "invisible": !this.props.visible,
    });

    return (
      <div className={errorClass}>
        <span>{this.props.errorMessage}</span>
      </div>
    );
  },
});

var TextInput = createReactClass({
  getInitialState: function () {
    //most of these variables have to do with handling errors
    return {
      isEmpty: true,
      value: null,
      valid: false,
      errorMessage: "Input is invalid",
      errorVisible: false,
    };
  },

  handleChange: function (event) {
    //validate the field locally
    this.validation(event.target.value);

    //Call onChange method on the parent component for updating its state
    //If saving this field for final form submission, it gets passed
    // up to the top component for sending to the server
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  },

  validation: function (value, valid) {
    //The valid variable is optional, and true if not passed in:
    if (typeof valid === "undefined") {
      valid = true;
    }

    var message = "";
    var errorVisible = false;

    //we know how to validate text fields based on information passed through props
    if (!valid) {
      //This happens when the user leaves the field, but it is not valid
      //(we do final validation in the parent component, then pass the result
      //here for display)
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    } else if (this.props.required && jQuery.isEmptyObject(value)) {
      //this happens when we have a required field with no text entered
      //in this case, we want the "emptyMessage" error message
      message = this.props.emptyMessage;
      valid = false;
      errorVisible = true;
    } else if (value.length < this.props.minCharacters) {
      //This happens when the text entered is not the required length,
      //in which case we show the regular error message
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }

    //setting the state will update the display,
    //causing the error message to display if there is one.
    this.setState({
      value: value,
      isEmpty: jQuery.isEmptyObject(value),
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible,
    });
  },

  handleBlur: function (event) {
    //Complete final validation from parent element when complete
    var valid = this.props.validate(event.target.value);
    //pass the result to the local validation element for displaying the error
    this.validation(event.target.value, valid);
  },
  render: function () {
    if (this.props.textArea) {
      return (
        <div className={this.props.uniqueName}>
          <textarea
            placeholder={this.props.text}
            className={"input input-" + this.props.uniqueName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
          />

          <InputError
            visible={this.state.errorVisible}
            errorMessage={this.state.errorMessage}
          />
        </div>
      );
    } else {
      return (
        <div className={this.props.uniqueName}>
          <input
            placeholder={this.props.text}
            className={"input input-" + this.props.uniqueName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
          />

          <InputError
            visible={this.state.errorVisible}
            errorMessage={this.state.errorMessage}
          />
        </div>
      );
    }
  },
});

var ReleaseDate = createReactClass({
  getInitialState: function () {
    return {
      displayClass: "invisible",
      year: "----",
      month: "--",
      day: "--",
    };
  },
  checkCompletion: function () {
    var stateYear = this.state.year;
    var stateMonth = this.state.month;
    var stateDay = this.state.day;
    if (stateYear !== "----" && stateMonth !== "--" && stateDay !== "--") {
      var date_put_together = stateYear + "-" + stateMonth + "-" + stateDay;
      this.props.onChange(date_put_together);
    }
  },
  handleClick: function (e) {
    //We're doing another one of these "any value" fields, only shown when
    //a specific "other" option is chosen
    var name = e.target.name;
    var val = e.target.value;
    if (name === "year")
      this.setState({ year: val }, function () {
        this.checkCompletion();
      });
    else if (name === "month")
      this.setState({ month: val }, function () {
        this.checkCompletion();
      });
    else if (name === "day")
      this.setState({ day: val }, function () {
        this.checkCompletion();
      });
  },
  render: function () {
    //This is a select field with options and sub-options, plus an "any value" field
    var value = this.props.value;
    if (
      this.props.value !== undefined &&
      [
        "none",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ].indexOf(this.props.value) === -1
    ) {
      value = "TBA";
    } else if (this.props.value === undefined) {
      value = "none";
    }

    return (
      <div className="date">
        <select name="year" onChange={this.handleClick} multiple={false}>
          <option value="none"></option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="TBA">TBA</option>
        </select>

        <select name="month" onChange={this.handleClick} multiple={false}>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>

        <select name="day" onChange={this.handleClick} multiple={false}>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>

        <InputError
          visible={this.state.errorVisible}
          errorMessage={this.state.errorMessage}
        />
      </div>
    );
  },
});

export default BookShelf;
