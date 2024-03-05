import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";

export default function Layout() {
  const navigate = useNavigate();
  const onClickLogout = async () => {
    const ok = confirm("Are you sure you want to logout?");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };
  return (
    <Wrapper>
      <Menu>
        <Link to="/">
          <MenuItem>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
              />
            </svg>
          </MenuItem>
        </Link>
        <Link to="/movies">
          <MenuItem>
            <svg
              width="26px"
              height="26px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 18C12 20.2091 10.2091 22 8 22C5.79086 22 4 20.2091 4 18C4 15.7909 5.79086 14 8 14C10.2091 14 12 15.7909 12 18Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></path>{" "}
                <path d="M12 18V6" stroke="#ffffff" stroke-width="1.5"></path>{" "}
                <path
                  d="M16.1167 10.0587L13.4833 8.74199C13.1184 8.55954 12.9359 8.46831 12.7852 8.35309C12.3949 8.05463 12.128 7.62291 12.0357 7.14028C12 6.95397 12 6.74998 12 6.34199C12 5.3709 12 4.88536 12.1196 4.55528C12.4356 3.68288 13.3101 3.14239 14.2317 3.24989C14.5804 3.29057 15.0147 3.50771 15.8833 3.94199L18.5167 5.25871C18.8816 5.44117 19.0641 5.5324 19.2148 5.64761C19.6051 5.94608 19.872 6.3778 19.9643 6.86043C20 7.04673 20 7.25073 20 7.65871C20 8.6298 20 9.11535 19.8804 9.44543C19.5644 10.3178 18.6899 10.8583 17.7683 10.7508C17.4196 10.7101 16.9853 10.493 16.1167 10.0587Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          </MenuItem>
        </Link>
        <Link to="/profile">
          <MenuItem>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
          </MenuItem>
        </Link>
        <MenuItem onClick={onClickLogout} className="log-out">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
            />
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
            />
          </svg>
        </MenuItem>
      </Menu>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  padding: 50px 0px;
  width: 100%;
  max-width: 860px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: white;
  }
  &.log-out {
    border-color: tomato;
    svg {
      fill: tomato;
    }
  }
`;
