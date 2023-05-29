import React from "react";
import PropTyper from "prop-types";

function ContactItemBody({ name, tag }) {
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__title">{name}</h3>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
}

ContactItemBody.PropTyper = {
  name: PropTyper.string.isRequired,
  tag: PropTyper.string.isRequired,
};

export default ContactItemBody;
