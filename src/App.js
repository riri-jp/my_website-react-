import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <div id="nav-wrapper">
            <nav id="nav" />
          </div>
          <div class="container">
            <div id="logo">
              <h1>
                <a href="#"> Eng.Mashari Alahmary </a>
              </h1>
              <span class="tag" />
            </div>
          </div>
        </div>

        <div id="featured">
          <div class="container">
            <header>
              <h2> Welcome To My Life😀</h2>
            </header>

            <hr />
            <div class="row">
              <section class="4u">
                <span class="pennant">
                  <span class="fa fa-briefcase" />
                </span>
                <h3> مشاريعي </h3>
                <p>
                  مؤسس موقع ساونيهون لتنظيم الرحلات السياحية و التجارية من والى
                  اليابان فقط ، والافكار والمشاريع لم تنتهي بعد والقادم اقوى...
                </p>
              </section>
              <section class="4u">
                <span class="pennant">
                  <span class="fa fa-lock" />
                </span>
                <h3> الخبرات </h3>
                <p>
                  {" "}
                  خبرة سنتان في مدينة الامير سلطان بن عبد العزيز للخدمات
                  الانسانية كمطور برامج ، العمل مع شركة ارامكو و سوق.كوم كمترجم
                  لغة يابانية ، العمل في اعمال حرة أخرى
                </p>
              </section>
              <section class="4u">
                <span class="pennant">
                  <span class="fa fa-globe" />
                </span>
                <h3> التعليم </h3>
                <p>
                  {" "}
                  خريج دولة اليابان تخصص هندسة نظم المعلومات ، حاصل على اللغة
                  اليابانية{" "}
                </p>
              </section>
            </div>
          </div>
        </div>

        <div id="tweet">
          <div class="container">
            <section>
              <blockquote>
                &ldquo;همتنا مثل جبل طويق، ولن تنكسر إلا إذا انهد هذا الجبل
                وتساوى بالأرض&rdquo;
              </blockquote>
            </section>
          </div>
        </div>

        <div id="footer">
          <div class="container">
            <section>
              <header>
                <h2>ありがとうございます</h2>
                <span class="byline">شكرا لكم ودمتم سالمين </span>
              </header>
              <ul />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
