import { css } from "@emotion/css";
import PropTypes from "prop-types";

const Navigation1 = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 130px;
          text-align: left;
          font-size: 16px;
          color: #000;
          font-family: Poppins;
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 7px;
          color: #121212;
        `}
      >
        <img
          className={css`
            height: 48px;
            width: 49px;
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/logoipsumlogo13-1.svg"
        />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 15px 0px 0px;
          `}
        >
          <a
            className={css`
              text-decoration: none;
              position: relative;
              font-weight: 700;
              color: inherit;
              display: inline-block;
              min-width: 98px;
              z-index: 1;
            `}
          >
            MATAVERSE
          </a>
        </div>
      </div>
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 20px 0px 0px;
          gap: 55px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 22px;
            color: #3c652f;
          `}
        >
          <img
            className={css`
              height: 24px;
              width: 24px;
              position: relative;
              min-height: 24px;
              z-index: 1;
            `}
            loading="lazy"
            alt=""
            src="/vuesaxboldelement3.svg"
          />
          <div
            className={css`
              position: relative;
              font-weight: 500;
              display: inline-block;
              min-width: 75px;
              z-index: 1;
            `}
          >{`Overview `}</div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 22px;
          `}
        >
          <img
            className={css`
              height: 24px;
              width: 24px;
              position: relative;
              min-height: 24px;
              z-index: 1;
            `}
            loading="lazy"
            alt=""
            src="/vuesaxlinearcalendaredit.svg"
          />
          <div
            className={css`
              position: relative;
              font-weight: 500;
              display: inline-block;
              min-width: 75px;
              z-index: 1;
            `}
          >
            Schedule
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 22px;
          `}
        >
          <img
            className={css`
              height: 24px;
              width: 24px;
              position: relative;
              overflow: hidden;
              flex-shrink: 0;
              min-height: 24px;
              z-index: 1;
            `}
            loading="lazy"
            alt=""
            src="/vuesaxlinearfolder2.svg"
          />
          <div
            className={css`
              position: relative;
              font-weight: 500;
              display: inline-block;
              min-width: 67px;
              z-index: 1;
            `}
          >{`Courses `}</div>
        </div>
        <div
          className={css`
            width: 111px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 22px;
          `}
        >
          <img
            className={css`
              height: 24px;
              width: 24px;
              position: relative;
              min-height: 24px;
              z-index: 1;
            `}
            loading="lazy"
            alt=""
            src="/vuesaxlinearchart.svg"
          />
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
                display: inline-block;
                min-width: 65px;
                z-index: 1;
              `}
            >
              Statistic
            </div>
            <div
              className={css`
                width: 0px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 15px 0px 0px;
                box-sizing: border-box;
                margin-left: -65px;
              `}
            >
              <div
                className={css`
                  width: 0px;
                  height: 0px;
                  position: relative;
                  font-weight: 500;
                  display: inline-block;
                  z-index: 2;
                `}
              >{` `}</div>
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 22px;
          `}
        >
          <div
            className={css`
              height: 24px;
              width: 24px;
              position: relative;
            `}
          >
            <img
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                z-index: 1;
              `}
              alt=""
              src="/vuesaxlinearsetting2.svg"
            />
            <img
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                z-index: 2;
              `}
              loading="lazy"
              alt=""
              src="/vuesaxlinearsetting2.svg"
            />
          </div>
          <a
            className={css`
              text-decoration: none;
              position: relative;
              font-weight: 500;
              color: inherit;
              display: inline-block;
              min-width: 66px;
              z-index: 1;
            `}
          >
            Settings
          </a>
        </div>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 20px 0px 0px;
          gap: 15px;
        `}
      >
        <img
          className={css`
            height: 31px;
            width: 31px;
            position: relative;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/vuesaxlinearlogin.svg"
        />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 2px 0px 0px;
          `}
        >
          <div
            className={css`
              position: relative;
              font-weight: 500;
              display: inline-block;
              min-width: 59px;
              z-index: 1;
            `}
          >{`Log out `}</div>
        </div>
      </div>
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
