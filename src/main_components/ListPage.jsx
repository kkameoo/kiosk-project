import { useRef } from "react";
import { NavLink } from "react-router-dom";

function ListPage({ pages, paging }) {
  return (
    <div>
      <NavLink>prev</NavLink>
      {pages.map((page) => (
        <NavLink
          key={page.id}
          to={page.id}
          onClick={(event) => {
            // event.preventDefault();
            console.log(event.target.value);
            paging(page.id + 1);
          }}
        >
          {page.number}
        </NavLink>
      ))}
    </div>
  );
}

export default ListPage;
