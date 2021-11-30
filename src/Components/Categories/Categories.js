import e from 'cors';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCategories} from '../../store/actions/categoriesActions'
import './Categories.scss';

class categories extends Component {
  componentDidMount(){
      this.props.getCategories()
      
  }
  render() {
      const {categories} = this.props.categories
  
      console.log(categories)
   
      
    loop1:
      for(var key in categories.categories) {

        
        var titles = categories.categories[key];
        var CategCont = document.getElementById('CategorieCont');
        var CategTitle = document.createElement('li');
        CategTitle.setAttribute('class', 'CategorieItem');
        CategTitle.style.backgroundImage = `url(${titles.items[key].image})`;
        // console.log(categories.categories)
       
        var seeAll = document.getElementById("SeeAll");

        if(seeAll) {
          seeAll.addEventListener("click", function() {
            console.log(categories.categories[key])
         }, false);
        }
      
        


        CategTitle.innerHTML = `
          <div class='listRow'>
            <h6>${titles.title}</h6>
            <span>${titles.items.length}</span>
          </div>
          <div class="ContentMiddlePhoto">
            <img src="${titles.items[key].image}">
          </div>
          <button class="SeeAll" id="SeeAll"><span>SEE ALL</span></button>
          
        `;
        CategCont.appendChild(CategTitle)
      }

  
   

    // console.table( JSON.stringify(categories, null, 4));
      return (
        <div class="CateGorieWrapper">
            <ul id="CategorieCont"></ul>
        </div>
        
    )
  }
}

const mapStateToProps  = (state) => ({categories:state.categories})

export default connect(mapStateToProps, {getCategories})(categories)