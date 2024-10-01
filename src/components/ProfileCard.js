import { css } from "@emotion/css";
import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";

const ProfileCard = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          flex: 1;
          border-radius: 0px 35px 35px 0px;
          background-color: #f7f3dd;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 69px 23px 70px 24px;
          box-sizing: border-box;
          gap: 45px;
          max-width: 100%;
          z-index: 2;
          text-align: left;
          font-size: 36px;
          color: #121212;
          font-family: Poppins;
          @media screen and (max-width: 1025px) {
            padding-top: 45px;
            padding-bottom: 45px;
            box-sizing: border-box;
          }
          @media screen and (max-width: 750px) {
            padding-top: 29px;
            padding-bottom: 29px;
            box-sizing: border-box;
          }
          @media screen and (max-width: 450px) {
            gap: 22px;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 348px;
          height: 956px;
          position: relative;
          border-radius: 0px 35px 35px 0px;
          background-color: #f7f3dd;
          display: none;
          max-width: 100%;
        `}
      />
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 39px 0px 38px;
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 30px;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px 6px;
            `}
          >
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 27px;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 0px 12px 0px 11px;
                `}
              >
                <div
                  className={css`
                    height: 190px;
                    flex: 1;
                    position: relative;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: calc(100% - 23px);
                      top: 0px;
                      right: 9px;
                      left: 14px;
                      border-radius: 50%;
                      background-color: #fff7cd;
                      height: 166px;
                      z-index: 3;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 1px;
                      left: 0px;
                      width: 100%;
                      height: 100%;
                      overflow: hidden;
                      z-index: 4;
                    `}
                    loading="lazy"
                    alt=""
                    src="/avatar.svg"
                  />
                </div>
              </div>
              <h2
                className={css`
                  margin-bottom: 1rem;
                  height: 0px;
                  position: relative;
                  font-size: inherit;
                  font-weight: 600;
                  font-family: inherit;
                  display: inline-block;
                  z-index: 3;
                  @media screen and (max-width: 1025px) {
                    font-size: 29px;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: 22px;
                  }
                `}
              >
                Vishnu KP
              </h2>
            </div>
          </div>
          <div
            className={css`
              position: relative;
              font-size: 20px;
              font-weight: 500;
              color: #979ca5;
              z-index: 3;
              @media screen and (max-width: 450px) {
                font-size: 16px;
              }
            `}
          >
            Amrita Vishwa Vidyapeetham
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          gap: 26px;
          font-size: 22px;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px 0px 6px;
          `}
        >
          <div
            className={css`
              height: 1px;
              flex: 1;
              position: relative;
              border-top: 1px solid #979ca5;
              box-sizing: border-box;
              z-index: 3;
            `}
          />
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-end;
            padding: 0px 4px 0px 12px;
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 23px;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-between;
                gap: 20px;
                @media screen and (max-width: 450px) {
                  flex-wrap: wrap;
                }
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 7px 0px 0px;
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-weight: 600;
                    display: inline-block;
                    min-width: 121px;
                    z-index: 3;
                    @media screen and (max-width: 450px) {
                      font-size: 18px;
                    }
                  `}
                >
                  Reminders
                </div>
              </div>
              <img
                className={css`
                  height: 43px;
                  width: 43px;
                  position: relative;
                  min-height: 43px;
                  z-index: 3;
                `}
                loading="lazy"
                alt=""
                src="/notif.svg"
              />
            </div>
            <FrameComponent6 group15="/group-15.svg" workshop="Workshop" />
            <FrameComponent6
              propGap="20px"
              group15="/group-17@2x.png"
              workshop="Homework"
              propPadding="0px 0px 14.3px"
            />
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-end;
            padding: 0px 20px 0px 23px;
            font-size: 20px;
            color: #000;
            font-family: Abel;
          `}
        >
          <div
            className={css`
              height: 201px;
              flex: 1;
              position: relative;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: 15px;
                background-color: #fff7cd;
                width: 100%;
                height: 100%;
                z-index: 3;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  border-radius: 15px;
                  background-color: #fff7cd;
                  width: 100%;
                  height: 100%;
                  display: none;
                `}
              />
              <img
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  border-radius: 15px;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                `}
                alt=""
                src="/mesh38@2x.png"
              />
              <img
                className={css`
                  position: absolute;
                  top: 137px;
                  left: 187px;
                  width: 54px;
                  height: 51px;
                  z-index: 5;
                `}
                loading="lazy"
                alt=""
                src="/vuesaxlineararrowsquareright-1.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 129px;
                  left: 12px;
                  font-weight: 500;
                  z-index: 5;
                  @media screen and (max-width: 450px) {
                    font-size: 16px;
                  }
                `}
              >
                <p
                  className={css`
                    margin: 0;
                  `}
                >{`Upgrade `}</p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  to Premium
                </p>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 12px;
                  left: 21px;
                  width: 71px;
                  height: 71px;
                  z-index: 6;
                `}
                alt=""
                src="/sharp-leaf-1.svg"
              />
            </div>
            <img
              className={css`
                position: absolute;
                top: 18.1px;
                left: 74px;
                width: 183.1px;
                height: 88.9px;
                object-fit: contain;
                z-index: 5;
              `}
              loading="lazy"
              alt=""
              src="/triple-leaf@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  className: PropTypes.string,
};

export default ProfileCard;
