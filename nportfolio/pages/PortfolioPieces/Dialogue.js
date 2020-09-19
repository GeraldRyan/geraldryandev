import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

export default function Dialogue(props) {
  const { name, description, github, image, site, tech_used } = props.folio;
  return (
    <div>
      <div>{name}</div>
      <div>description</div>
    </div>
  );
}
