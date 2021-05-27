import React, { useState } from "react"
import "./ToDoList.css";


    class ToDoList extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          newItem: "",
          list: [] };
    
      }
    
      //incorporating local storage 
      componentDidMount() {
        this.hydrateStateWithLocalStorage();
    
        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        window.addEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this));
    
      }
    
      componentWillUnmount() {
        window.removeEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this));
    
    
        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
      }
    
      hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
          // if the key exists in localStorage
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);
    
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
              // handle empty string
              this.setState({ [key]: value });
            }
          }
        }
      }
    
      saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
          // save to localStorage
          localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
      }
    
      updateInput(key, value) {
        // update react state
        this.setState({ [key]: value });
      }
    
      addItem() {
        // create a new item with unique id
        const newItem = {
          id: 1 + Math.random(),
          value: this.state.newItem.slice() };
    
    
    
        // copy current list of items
        const list = [...this.state.list];
    
        // add the new item to the list
        list.push(newItem);
    
        // update state with new list, reset the new item input
        this.setState({
          list,
          newItem: "" });
    
      }
    
      deleteItem(id) {
        // copy current list of items
        const list = [...this.state.list];
        // filter out the item being deleted
        const updatedList = list.filter(item => item.id !== id);
    
        this.setState({ list: updatedList });
      }
    
      render() {
        return /*#__PURE__*/(
          React.createElement("div", null, 
    
          React.createElement("h1", { className: "app-title" }), /*#__PURE__*/
    
          React.createElement("div", { className: "container" }, 
          React.createElement("div", {
            style: {
              padding: 30,
              textAlign: "left",
              maxWidth: 500,
              margin: "auto" } }, /*#__PURE__*/
    
    
    
          React.createElement("br", null), /*#__PURE__*/
          React.createElement("input", {
            type: "text",
            placeholder: "Type item here",
            value: this.state.newItem,
            onChange: e => this.updateInput("newItem", e.target.value) }), /*#__PURE__*/
    
          React.createElement("button", {
            className: "add-btn btn-floating",
            onClick: () => this.addItem(),
            disabled: !this.state.newItem.length }, /*#__PURE__*/
    
          React.createElement("i", { class: "material-icons" }, " + ")), /*#__PURE__*/
    
          React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
          React.createElement("ul", null,
          this.state.list.map(item => {
            return /*#__PURE__*/(
              React.createElement("li", { key: item.id },
              item.value, /*#__PURE__*/
              React.createElement("button", { className: "btn btn-floating", onClick: () => this.deleteItem(item.id) }, /*#__PURE__*/
              React.createElement("i", { class: "material-icons" }, "x"))));
    
    
    
          }))))));
    
    
    
    
    
      }}
    
    

  


export default ToDoList
