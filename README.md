# react-i18next-phraseapp Demo

This demo project shows how to integrate the [PhraseApp In-Context Editor](https://phraseapp.com/) into a React app using [react-i18next](https://github.com/i18next/react-i18next) for localization via the [react-i18next-phraseapp](https://github.com/phrase/react-i18next-phraseapp) plugin.

## Install

    $ npm install

## Configure

The demo project uses the project ID from the [PhraseApp demo project](http://demo.phraseapp.com/). If you want to use the [react-i18next-phraseapp adapter](https://github.com/phrase/react-i18next-phraseapp) in your own project, make sure to adjust the project ID accordingly.

## Run

Start the server:

    $ npm start

and then open the app at:

    http://localhost:3003/

## Support

Questions? [Contact us](https://phraseapp.com/contact).


## App

- Integration i18next + i18next react
    - language switch + language detection ::check
    - loading language files using backend extension :: check
    - pluralisation ::check
    - english as a fallback / default language
        (because what's the point of translating the default language)
    - detection of missing strings ?
    - translations for constants ?
    - translation as a component and higher order component
    - Scalability in mind, break the app into namespaces

- Collecting strings
    - collecting message script + api + docs
    - collections strings from the src files and write new files
    - detecting missing strings (from console / from ui ?)
    - managing duplicated keys

- PhraseApp Api
    - sending strings to phrase app
    - integrating strings back in the app
    - context editing or real time editing (review git flow ?)

- Releasing the app
    - feature flags
    - git flow / sub modules ?
        - full integration with github secret key and webhooks
            this will push / pull to the repo
         - fixing conflicts ?
