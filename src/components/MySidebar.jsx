import React from "react";

export default function MySidebar(props) {
  return (
    <aside>
      <header>{props.title}</header>
      <main>{props.children}</main>
      <footer onClick={() => alert("hej")}>{props.socialLinks}</footer>
    </aside>
  );
}
