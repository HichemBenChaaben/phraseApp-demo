import React, { Component } from "react";
import { translate, Trans } from "react-i18next";

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App">
        <div className="App-header">
          <h2>{t("Welcome to React")}</h2>
          <button onClick={() => changeLanguage("de")}>de</button>
          <button onClick={() => changeLanguage("en")}>en</button>
          <button onClick={() => changeLanguage("fr")}>fr</button>
          <button onClick={() => changeLanguage("nl")}>nl</button>
        </div>
        <div>
          {t("message with t props..")}
          <Trans i18nKey="welcome message">
            this is a welcome message here.
          </Trans>
          <Trans i18nKey="another welcome message">
            Another welcome message.
          </Trans>
        </div>
        <div className="App-intro">
          <Trans i18nKey="introduction">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
          <Trans i18nKey="feed_no_change">
            Data <strong>no change</strong>. No update is performed. Please
            click
            <a
              href=""
              onClick={e => {
                e.preventDefault();
              }}
            >
              Force Update
            </a>
            .
          </Trans>
          <Trans count={10} i18nKey="counting">
            you can do {{count}} plurals.
          </Trans>
          <Trans i18nKey="new-translation-text">
            New translation added.
          </Trans>
        </div>
        <div style={{ marginTop: 40 }}>
          <a href="https://react.i18next.js">
            Learn more: https://react.i18next.js
          </a>
        </div>
      </div>
    );
  }
}

// extended main view with translate hoc
export default translate("translations")(App);