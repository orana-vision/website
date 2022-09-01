import React from "react";
import "./VerticalCarousel.css";
export default function VerticalCarousel() {
  return (
    <div class="wrapper">
      <div class="carousel">
        <div class="carousel__item">
          <div class="carousel__item-body">
            <p class="title">1</p>
            <p>Unicode: U+1F433</p>
          </div>
        </div>
        <div class="carousel__item">
          <div class="carousel__item-body">
            <p class="title">2</p>
            <p>Unicode: U+1F40B</p>
          </div>
        </div>
        <div class="carousel__item">
          <div class="carousel__item-body">
            <p class="title">3</p>
            <p>Unicode: U+1F42C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
