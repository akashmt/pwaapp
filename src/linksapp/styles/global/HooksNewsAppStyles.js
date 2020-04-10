import { createGlobalStyle  }  from 'styled-components';

export const HooksNewsAppStyles = createGlobalStyle `
body {
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, sans-serif;
}

input {
  max-width: 500px;
}

.gray {
  color: #828282;
}

.orange {
  background-color: #ff6600;
}

.background-gray {
  background-color: rgb(246, 246, 239);
}

.f11 {
  font-size: 11px;
}

.w85 {
  width: 85%;
}

.button {
  font-family: monospace;
  font-size: 10pt;
  color: black;
  background-color: buttonface;
  text-align: center;
  padding: 2px 6px 3px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonface;
  cursor: pointer;
  max-width: 250px;
}

input {
  padding: 0.1em;
  margin-bottom: 0.2em;
}

.error-input {
  border: 2px solid red;
  border-radius: 4px;
}

.error-text {
  margin: 0.25em 0 0.5em 0;
  padding: 0;
  color: red;
  font-style: bold;
}

.header {
  background-color: #ff6600;
  white-space: nowrap;
  padding: 0.25rem;
  color: black;
  justify-content: space-between;
  display: flex;
}

.header-title {
  font-weight: 700;
  margin-left: 0.25rem;
  margin-right: 5px;
  color: black;
  text-decoration: none;
}

.header-link {
  margin-left: 0.2rem;
  color: black;
  text-decoration: none;
}

.header-button {
  margin-left: 0.25rem;
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.header-name {
  color: black;
  text-decoration: none;
}

.divider {
  margin-left: 0.25rem;
  color: black;
}

.link {
  color: #828282;
}

textarea {
  margin-top: 0.5em;
  width: 90%;
}

.delete-button {
  color: red;
  cursor: pointer;
}

.app-container {
  width: 85%;
  margin-right: auto;
  margin-left: auto;
}

.route-container {
  background-color: rgb(246, 246, 239);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.pagination {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  color: #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.vote-button {
  font-size: 11px;
  color: #828282;
  margin-left: 0.25rem;
}

.forgot-password {
  padding: 1em 0;
}

.logo {
  width: 20px;
  height: 18px;
  border: 1px solid white;
  margin: 0;
}

.comment-author {
  color: #828282;
}

.input {
  -webkit-appearance: none;
  -moz-appearance: none;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  padding: 0.2rem;
  margin: 0.5rem 0;
  width: 100%;
  margin-bottom: 0.2em;
  max-width: 500px;
}
`