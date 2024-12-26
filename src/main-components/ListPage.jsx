import { NavLink } from "react-router-dom";

function ListPage({ pages, paging, prevButton, nextButton }) {
  return (
    <div>
      <NavLink
        onClick={() => {
          prevButton();
        }}
      >
        prev
      </NavLink>
      {pages.map((page) => (
        <NavLink
          key={page.id}
          to={page.id}
          onClick={(event) => {
            event.preventDefault();
            console.log(event.target.value);
            paging(page.id + 1);
          }}
        >
          {page.number}
        </NavLink>
      ))}
      <NavLink
        onClick={() => {
          nextButton();
        }}
      >
        next
      </NavLink>
    </div>
  );
}

export default ListPage;
