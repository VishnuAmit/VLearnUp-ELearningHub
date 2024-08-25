import { css } from "@emotion/css";
import Navigation1 from "../components/Navigation1";
import ProgressBar from "../components/ProgressBar";
import ProfileCard from "../components/ProfileCard";

const Dashboard = () => {
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        border-radius: 35px;
        background-color: #efefef;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 34px 14px 34px 50px;
        box-sizing: border-box;
        gap: 123px;
        line-height: normal;
        letter-spacing: normal;
        @media screen and (max-width: 750px) {
          gap: 61px;
          padding-left: 25px;
          box-sizing: border-box;
        }
        @media screen and (max-width: 450px) {
          gap: 31px;
        }
      `}
    >
      <img
        className={css`
          height: 8834.5px;
          width: 7343.9px;
          position: absolute;
          margin: 0 !important;
          right: -3820.2px;
          bottom: -5475px;
          object-fit: contain;
          z-index: 1;
        `}
        alt=""
      />
      <div
        className={css`
          height: 920px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 36px 0px 0px;
          box-sizing: border-box;
          @media screen and (max-width: 750px) {
            display: none;
          }
        `}
      >
        <Navigation1 />
      </div>
      <main
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 68px;
          max-width: calc(100% - 277px);
          @media screen and (max-width: 1100px) {
            gap: 34px;
          }
          @media screen and (max-width: 1025px) {
            flex-wrap: wrap;
          }
          @media screen and (max-width: 750px) {
            gap: 17px;
            max-width: 100%;
          }
        `}
      >
        <section
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 29px 0px 0px;
            box-sizing: border-box;
            max-width: 100%;
            text-align: left;
            font-size: 48px;
            color: #000;
            font-family: Poppins;
            @media screen and (max-width: 750px) {
              min-width: 100%;
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 49px;
              max-width: 100%;
              @media screen and (max-width: 750px) {
                gap: 24px;
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 23px;
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 0px 20px 0px 0px;
                  box-sizing: border-box;
                  gap: 1px;
                  max-width: 100%;
                `}
              >
                <a
                  className={css`
                    text-decoration: none;
                    position: relative;
                    font-weight: 600;
                    color: inherit;
                    z-index: 2;
                    @media screen and (max-width: 1025px) {
                      font-size: 38px;
                    }
                    @media screen and (max-width: 450px) {
                      font-size: 29px;
                    }
                  `}
                >
                  Overview
                </a>
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px 0px 0px 1px;
                    font-size: 15px;
                    color: #979ca5;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      font-weight: 500;
                      z-index: 2;
                    `}
                  >
                    <span className={css``}>Welcome back, B</span>
                    <span className={css``}>ella</span>
                    <span className={css``}>
                      ! Your progress is really good. Keep it up
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: 24px;
                  max-width: 100%;
                  font-size: 24px;
                  color: #202c40;
                  font-family: Jost;
                  @media screen and (max-width: 750px) {
                    flex-wrap: wrap;
                  }
                `}
              >
                <div
                  className={css`
                    height: 263px;
                    flex: 1;
                    position: relative;
                    min-width: 230px;
                    max-width: 100%;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 8px;
                      left: 0px;
                      border-radius: 15px;
                      background-color: #f1e6ac;
                      width: 100%;
                      height: 255px;
                      z-index: 2;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        border-radius: 15px;
                        background-color: #f1e6ac;
                        width: 100%;
                        height: 100%;
                        display: none;
                      `}
                    />
                    <img
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 1px;
                        border-radius: 15px;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/mesh08@2x.png"
                    />
                    <b
                      className={css`
                        position: absolute;
                        top: 157px;
                        left: 31px;
                        z-index: 5;
                        @media screen and (max-width: 450px) {
                          font-size: 19px;
                        }
                      `}
                    >
                      9.6 AVERAGE SCORE
                    </b>
                    <div
                      className={css`
                        position: absolute;
                        top: 197px;
                        left: 31px;
                        font-size: 15px;
                        font-weight: 500;
                        font-family: Poppins;
                        z-index: 4;
                      `}
                    >
                      Better than 86% of students
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 21px;
                        left: 30px;
                        width: 84px;
                        height: 84px;
                        z-index: 4;
                      `}
                      loading="lazy"
                      alt=""
                      src="/sharp-leaf.svg"
                    />
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 152px;
                      width: 201px;
                      height: 203px;
                      z-index: 4;
                    `}
                    loading="lazy"
                    alt=""
                    src="/round-leaf.svg"
                  />
                </div>
                <div
                  className={css`
                    width: 305px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 9px 0px 0px;
                    box-sizing: border-box;
                    min-width: 305px;
                    font-size: 20px;
                    color: #121212;
                    font-family: Alatsi;
                    @media screen and (max-width: 750px) {
                      flex: 1;
                    }
                  `}
                >
                  <div
                    className={css`
                      align-self: stretch;
                      border-radius: 15px;
                      background-color: #fff;
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      padding: 41px 19px 29px 29px;
                      gap: 56px;
                      z-index: 2;
                      @media screen and (max-width: 450px) {
                        gap: 28px;
                      }
                    `}
                  >
                    <div
                      className={css`
                        width: 305px;
                        height: 242px;
                        position: relative;
                        border-radius: 15px;
                        background-color: #fff;
                        display: none;
                      `}
                    />
                    <div
                      className={css`
                        align-self: stretch;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-end;
                        justify-content: space-between;
                        gap: 20px;
                      `}
                    >
                      <div
                        className={css`
                          width: 138px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                          justify-content: flex-start;
                          gap: 8px;
                        `}
                      >
                        <div
                          className={css`
                            align-self: stretch;
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            padding: 0px 0px 0px 1px;
                          `}
                        >
                          <div
                            className={css`
                              height: 52px;
                              position: relative;
                              line-height: 22.4px;
                              font-weight: 600;
                              display: inline-block;
                              min-height: 52px;
                              z-index: 3;
                              @media screen and (max-width: 450px) {
                                font-size: 16px;
                              }
                            `}
                          >
                            <p
                              className={css`
                                margin: 0;
                              `}
                            >{`Product `}</p>
                            <p
                              className={css`
                                margin: 0;
                              `}
                            >
                              Analytics
                            </p>
                          </div>
                        </div>
                        <b
                          className={css`
                            position: relative;
                            font-size: 14px;
                            display: inline-block;
                            font-family: Manrope;
                            color: #979ca5;
                            min-width: 75px;
                            z-index: 3;
                          `}
                        >
                          Middle/Pro
                        </b>
                      </div>
                      <div
                        className={css`
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                          justify-content: flex-end;
                          padding: 0px 0px 4px;
                        `}
                      >
                        <img
                          className={css`
                            width: 69px;
                            height: 69px;
                            position: relative;
                            z-index: 3;
                          `}
                          loading="lazy"
                          alt=""
                          src="/vuesaxlineararrowsquareright.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 247px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: 9px;
                        font-size: 10px;
                        color: #000;
                        font-family: Poppins;
                      `}
                    >
                      <div
                        className={css`
                          align-self: stretch;
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-start;
                          padding: 0px 0px 0px 1px;
                        `}
                      >
                        <div
                          className={css`
                            flex: 1;
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            gap: 10px;
                          `}
                        >
                          <div
                            className={css`
                              display: flex;
                              flex-direction: column;
                              align-items: flex-start;
                              justify-content: flex-start;
                              padding: 4px 0px 0px;
                            `}
                          >
                            <div
                              className={css`
                                width: 8px;
                                height: 8px;
                                position: relative;
                                border-radius: 50%;
                                background-color: #f3da53;
                                z-index: 3;
                              `}
                            />
                          </div>
                          <div
                            className={css`
                              flex: 1;
                              display: flex;
                              flex-direction: column;
                              align-items: flex-start;
                              justify-content: flex-start;
                              padding: 0px 20px 0px 0px;
                            `}
                          >
                            <div
                              className={css`
                                position: relative;
                                font-weight: 500;
                                display: inline-block;
                                min-width: 56px;
                                z-index: 3;
                              `}
                            >
                              In Progress
                            </div>
                          </div>
                          <div
                            className={css`
                              display: flex;
                              flex-direction: column;
                              align-items: flex-start;
                              justify-content: flex-start;
                              padding: 1px 0px 0px;
                            `}
                          >
                            <div
                              className={css`
                                position: relative;
                                font-weight: 500;
                                display: inline-block;
                                min-width: 21px;
                                z-index: 3;
                              `}
                            >
                              34%
                            </div>
                          </div>
                        </div>
                      </div>
                      <ProgressBar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                justify-content: center;
                gap: 29px;
                font-size: 20px;
                color: #121212;
                @media screen and (max-width: 750px) {
                  flex-wrap: wrap;
                }
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 0px 7px 0px 0px;
                  box-sizing: border-box;
                  gap: 25px;
                  min-width: 190px;
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-size: 24px;
                    font-weight: 600;
                    z-index: 2;
                    @media screen and (max-width: 450px) {
                      font-size: 19px;
                    }
                  `}
                >
                  Featured Courses
                </div>
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px 3px;
                    color: #94918a;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      font-weight: 500;
                      z-index: 2;
                      @media screen and (max-width: 450px) {
                        font-size: 16px;
                      }
                    `}
                  >
                    Course name
                  </div>
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px 0px 0px 3px;
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
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: 30px;
                      `}
                    >
                      <div
                        className={css`
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-start;
                          gap: 10px;
                        `}
                      >
                        <div
                          className={css`
                            border-radius: 10px;
                            background-color: #c4c4c4;
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            z-index: 2;
                          `}
                        >
                          <div
                            className={css`
                              align-self: stretch;
                              width: 53px;
                              position: relative;
                              border-radius: 10px;
                              background-color: #c4c4c4;
                              display: none;
                            `}
                          />
                          <img
                            className={css`
                              height: 53px;
                              width: 53px;
                              position: relative;
                              border-radius: 10px;
                              overflow: hidden;
                              flex-shrink: 0;
                              z-index: 3;
                            `}
                            loading="lazy"
                            alt=""
                            src="/v24.svg"
                          />
                        </div>
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
                              display: flex;
                              flex-direction: column;
                              align-items: flex-start;
                              justify-content: flex-start;
                            `}
                          >
                            <div
                              className={css`
                                height: 28px;
                                display: flex;
                                flex-direction: row;
                                align-items: flex-start;
                                justify-content: flex-start;
                                padding: 0px 0px 0px;
                                box-sizing: border-box;
                              `}
                            >
                              <div
                                className={css`
                                  margin-bottom: -2px;
                                  position: relative;
                                  font-weight: 500;
                                  flex-shrink: 0;
                                  z-index: 2;
                                  @media screen and (max-width: 450px) {
                                    font-size: 16px;
                                  }
                                `}
                              >
                                Basics of Mobile UX
                              </div>
                            </div>
                            <div
                              className={css`
                                position: relative;
                                font-size: 14px;
                                font-weight: 500;
                                color: #94918a;
                                display: inline-block;
                                min-width: 82px;
                                flex-shrink: 0;
                                z-index: 3;
                              `}
                            >
                              Bruno Scott
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={css`
                          align-self: stretch;
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-start;
                          gap: 10px;
                        `}
                      >
                        <div
                          className={css`
                            border-radius: 10px;
                            background-color: #c4c4c4;
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            z-index: 2;
                          `}
                        >
                          <div
                            className={css`
                              align-self: stretch;
                              width: 53px;
                              position: relative;
                              border-radius: 10px;
                              background-color: #c4c4c4;
                              display: none;
                            `}
                          />
                          <img
                            className={css`
                              height: 53px;
                              width: 53px;
                              position: relative;
                              border-radius: 10px;
                              overflow: hidden;
                              flex-shrink: 0;
                              z-index: 3;
                            `}
                            loading="lazy"
                            alt=""
                            src="/v5.svg"
                          />
                        </div>
                        <div
                          className={css`
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: flex-start;
                            padding: 2px 0px 0px;
                          `}
                        >
                          <div
                            className={css`
                              align-self: stretch;
                              display: flex;
                              flex-direction: column;
                              align-items: flex-start;
                              justify-content: flex-start;
                            `}
                          >
                            <div
                              className={css`
                                align-self: stretch;
                                height: 28px;
                                display: flex;
                                flex-direction: row;
                                align-items: flex-start;
                                justify-content: flex-start;
                                padding: 0px 0px 0px;
                                box-sizing: border-box;
                              `}
                            >
                              <div
                                className={css`
                                  margin-bottom: -2px;
                                  position: relative;
                                  font-weight: 500;
                                  flex-shrink: 0;
                                  z-index: 2;
                                  @media screen and (max-width: 450px) {
                                    font-size: 16px;
                                  }
                                `}
                              >
                                Digital Design System
                              </div>
                            </div>
                            <div
                              className={css`
                                position: relative;
                                font-size: 14px;
                                font-weight: 500;
                                color: #94918a;
                                display: inline-block;
                                min-width: 82px;
                                flex-shrink: 0;
                                z-index: 3;
                              `}
                            >
                              Bruno Scott
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={css`
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: 10px;
                      `}
                    >
                      <div
                        className={css`
                          border-radius: 10px;
                          background-color: #c4c4c4;
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-start;
                          padding: 1px 0px 0px;
                          z-index: 2;
                        `}
                      >
                        <div
                          className={css`
                            align-self: stretch;
                            width: 53px;
                            position: relative;
                            border-radius: 10px;
                            background-color: #c4c4c4;
                            display: none;
                          `}
                        />
                        <img
                          className={css`
                            margin-left: -1px;
                            height: 53px;
                            width: 55px;
                            position: relative;
                            border-radius: 10px;
                            overflow: hidden;
                            flex-shrink: 0;
                            object-fit: contain;
                            z-index: 3;
                          `}
                          loading="lazy"
                          alt=""
                          src="/v25@2x.png"
                        />
                      </div>
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
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: flex-start;
                          `}
                        >
                          <div
                            className={css`
                              height: 28px;
                              display: flex;
                              flex-direction: row;
                              align-items: flex-start;
                              justify-content: flex-start;
                              padding: 0px 0px 0px;
                              box-sizing: border-box;
                            `}
                          >
                            <div
                              className={css`
                                margin-bottom: -2px;
                                position: relative;
                                font-weight: 500;
                                flex-shrink: 0;
                                z-index: 2;
                                @media screen and (max-width: 450px) {
                                  font-size: 16px;
                                }
                              `}
                            >
                              Basics of Mobile UX
                            </div>
                          </div>
                          <div
                            className={css`
                              position: relative;
                              font-size: 14px;
                              font-weight: 500;
                              color: #94918a;
                              display: inline-block;
                              min-width: 82px;
                              flex-shrink: 0;
                              z-index: 3;
                            `}
                          >
                            Bruno Scott
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={css`
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: 10px;
                      `}
                    >
                      <div
                        className={css`
                          border-radius: 10px;
                          background-color: #c4c4c4;
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-start;
                          z-index: 2;
                        `}
                      >
                        <div
                          className={css`
                            align-self: stretch;
                            width: 53px;
                            position: relative;
                            border-radius: 10px;
                            background-color: #c4c4c4;
                            display: none;
                          `}
                        />
                        <img
                          className={css`
                            height: 53px;
                            width: 53px;
                            position: relative;
                            border-radius: 10px;
                            overflow: hidden;
                            flex-shrink: 0;
                            object-fit: contain;
                            z-index: 3;
                          `}
                          loading="lazy"
                          alt=""
                          src="/v22@2x.png"
                        />
                      </div>
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
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: flex-start;
                          `}
                        >
                          <div
                            className={css`
                              height: 28px;
                              display: flex;
                              flex-direction: row;
                              align-items: flex-start;
                              justify-content: flex-start;
                              padding: 0px 0px 0px;
                              box-sizing: border-box;
                            `}
                          >
                            <div
                              className={css`
                                margin-bottom: -2px;
                                position: relative;
                                font-weight: 500;
                                flex-shrink: 0;
                                z-index: 2;
                                @media screen and (max-width: 450px) {
                                  font-size: 16px;
                                }
                              `}
                            >
                              Basics of Mobile UX
                            </div>
                          </div>
                          <div
                            className={css`
                              position: relative;
                              font-size: 14px;
                              font-weight: 500;
                              color: #94918a;
                              display: inline-block;
                              min-width: 82px;
                              flex-shrink: 0;
                              z-index: 3;
                            `}
                          >
                            Bruno Scott
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-end;
                  padding: 0px 22px 17px 0px;
                  font-size: 17px;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 33px;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      font-size: 20px;
                      font-weight: 500;
                      color: #94918a;
                      display: inline-block;
                      min-width: 49px;
                      z-index: 2;
                      @media screen and (max-width: 450px) {
                        font-size: 16px;
                      }
                    `}
                  >
                    Start
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      padding: 0px 0px 24px;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                        display: inline-block;
                        min-width: 51px;
                        z-index: 2;
                      `}
                    >
                      Feb 12
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: 57px;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                        display: inline-block;
                        min-width: 53px;
                        z-index: 2;
                      `}
                    >
                      Feb 14
                    </div>
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                        display: inline-block;
                        min-width: 53px;
                        z-index: 2;
                      `}
                    >
                      Feb 16
                    </div>
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                        display: inline-block;
                        min-width: 52px;
                        z-index: 2;
                      `}
                    >
                      Feb 18
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-end;
                  padding: 0px 0px 17px;
                  font-size: 17px;
                  color: #ffc000;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 33px;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      padding: 0px 7px 0px 5px;
                      font-size: 20px;
                      color: #94918a;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                        display: inline-block;
                        min-width: 46px;
                        z-index: 2;
                        @media screen and (max-width: 450px) {
                          font-size: 16px;
                        }
                      `}
                    >
                      Rate
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      padding: 0px 1px 24px 0px;
                      gap: 7px;
                    `}
                  >
                    <div
                      className={css`
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        padding: 1px 0px 0px;
                      `}
                    >
                      <img
                        className={css`
                          width: 24px;
                          height: 24px;
                          position: relative;
                          z-index: 2;
                        `}
                        loading="lazy"
                        alt=""
                        src="/star-11.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                        display: inline-block;
                        min-width: 26px;
                        z-index: 2;
                      `}
                    >{`4.8 `}</div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      padding: 0px 0px 24px;
                      gap: 7px;
                    `}
                  >
                    <div
                      className={css`
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        padding: 1px 0px 0px;
                      `}
                    >
                      <img
                        className={css`
                          width: 24px;
                          height: 24px;
                          position: relative;
                          z-index: 2;
                        `}
                        loading="lazy"
                        alt=""
                        src="/star-11.svg"
                      />
                    </div>
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                        display: inline-block;
                        min-width: 27px;
                        z-index: 2;
                      `}
                    >{`4.6 `}</div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      padding: 0px 1px 0px 0px;
                      gap: 57px;
                    `}
                  >
                    <div
                      className={css`
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: 7px;
                      `}
                    >
                      <div
                        className={css`
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                          justify-content: flex-start;
                          padding: 1px 0px 0px;
                        `}
                      >
                        <img
                          className={css`
                            width: 24px;
                            height: 24px;
                            position: relative;
                            z-index: 2;
                          `}
                          loading="lazy"
                          alt=""
                          src="/star-11.svg"
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          font-weight: 500;
                          display: inline-block;
                          min-width: 26px;
                          z-index: 2;
                        `}
                      >{`4.5 `}</div>
                    </div>
                    <div
                      className={css`
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: 7px;
                      `}
                    >
                      <div
                        className={css`
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                          justify-content: flex-start;
                          padding: 1px 0px 0px;
                        `}
                      >
                        <img
                          className={css`
                            width: 24px;
                            height: 24px;
                            position: relative;
                            z-index: 2;
                          `}
                          loading="lazy"
                          alt=""
                          src="/star-11.svg"
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          font-weight: 500;
                          display: inline-block;
                          min-width: 26px;
                          z-index: 2;
                        `}
                      >{`4.8 `}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={css`
                  width: 171px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-end;
                  padding: 0px 0px 15px;
                  box-sizing: border-box;
                  color: #ffd143;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: flex-start;
                    gap: 31px;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: 14px;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        font-weight: 600;
                        display: inline-block;
                        min-width: 79px;
                        z-index: 2;
                        @media screen and (max-width: 450px) {
                          font-size: 16px;
                        }
                      `}
                    >{`View all `}</div>
                    <div
                      className={css`
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        padding: 7px 0px 0px;
                      `}
                    >
                      <img
                        className={css`
                          width: 8px;
                          height: 16px;
                          position: relative;
                          z-index: 2;
                        `}
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
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
                      padding: 0px 4px 0px 0px;
                      color: #94918a;
                    `}
                  >
                    <div
                      className={css`
                        flex: 1;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: 20px;
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
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            padding: 0px 24px;
                          `}
                        >
                          <div
                            className={css`
                              position: relative;
                              font-weight: 500;
                              display: inline-block;
                              min-width: 49px;
                              z-index: 2;
                              @media screen and (max-width: 450px) {
                                font-size: 16px;
                              }
                            `}
                          >
                            Type
                          </div>
                        </div>
                        <div
                          className={css`
                            align-self: stretch;
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            padding: 0px 0px 22px;
                          `}
                        >
                          <button
                            className={css`
                              cursor: pointer;
                              border: none;
                              padding: 7px 19px 6px;
                              background-color: #f7efd8;
                              border-radius: 10px;
                              display: flex;
                              flex-direction: row;
                              align-items: flex-start;
                              justify-content: flex-start;
                              white-space: nowrap;
                              z-index: 2;
                              &:hover {
                                background-color: #ded6bf;
                              }
                            `}
                          >
                            <div
                              className={css`
                                height: 31px;
                                width: 97px;
                                position: relative;
                                border-radius: 10px;
                                background-color: #f7efd8;
                                display: none;
                              `}
                            />
                            <div
                              className={css`
                                position: relative;
                                font-size: 12px;
                                font-weight: 600;
                                font-family: Poppins;
                                color: #121212;
                                text-align: left;
                                display: inline-block;
                                min-width: 59px;
                                z-index: 3;
                              `}
                            >
                              UI DESIGN
                            </div>
                          </button>
                        </div>
                        <div
                          className={css`
                            align-self: stretch;
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            padding: 0px 0px 22px;
                          `}
                        >
                          <button
                            className={css`
                              cursor: pointer;
                              border: none;
                              padding: 7px 19px 6px;
                              background-color: #f7efd8;
                              border-radius: 10px;
                              display: flex;
                              flex-direction: row;
                              align-items: flex-start;
                              justify-content: flex-start;
                              white-space: nowrap;
                              z-index: 2;
                              &:hover {
                                background-color: #ded6bf;
                              }
                            `}
                          >
                            <div
                              className={css`
                                height: 31px;
                                width: 97px;
                                position: relative;
                                border-radius: 10px;
                                background-color: #f7efd8;
                                display: none;
                              `}
                            />
                            <div
                              className={css`
                                position: relative;
                                font-size: 12px;
                                font-weight: 600;
                                font-family: Poppins;
                                color: #121212;
                                text-align: left;
                                display: inline-block;
                                min-width: 59px;
                                z-index: 3;
                              `}
                            >
                              UI DESIGN
                            </div>
                          </button>
                        </div>
                        <div
                          className={css`
                            align-self: stretch;
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            padding: 0px 0px 22px;
                          `}
                        >
                          <button
                            className={css`
                              cursor: pointer;
                              border: none;
                              padding: 7px 19px 6px;
                              background-color: #f7efd8;
                              border-radius: 10px;
                              display: flex;
                              flex-direction: row;
                              align-items: flex-start;
                              justify-content: flex-start;
                              white-space: nowrap;
                              z-index: 2;
                              &:hover {
                                background-color: #ded6bf;
                              }
                            `}
                          >
                            <div
                              className={css`
                                height: 31px;
                                width: 97px;
                                position: relative;
                                border-radius: 10px;
                                background-color: #f7efd8;
                                display: none;
                              `}
                            />
                            <div
                              className={css`
                                position: relative;
                                font-size: 12px;
                                font-weight: 600;
                                font-family: Poppins;
                                color: #121212;
                                text-align: left;
                                display: inline-block;
                                min-width: 59px;
                                z-index: 3;
                              `}
                            >
                              UI DESIGN
                            </div>
                          </button>
                        </div>
                        <button
                          className={css`
                            cursor: pointer;
                            border: none;
                            padding: 7px 19px 6px;
                            background-color: #f7efd8;
                            border-radius: 10px;
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            white-space: nowrap;
                            z-index: 2;
                            &:hover {
                              background-color: #ded6bf;
                            }
                          `}
                        >
                          <div
                            className={css`
                              height: 31px;
                              width: 97px;
                              position: relative;
                              border-radius: 10px;
                              background-color: #f7efd8;
                              display: none;
                            `}
                          />
                          <div
                            className={css`
                              position: relative;
                              font-size: 12px;
                              font-weight: 600;
                              font-family: Poppins;
                              color: #121212;
                              text-align: left;
                              display: inline-block;
                              min-width: 59px;
                              z-index: 3;
                            `}
                          >
                            UI DESIGN
                          </div>
                        </button>
                      </div>
                      <div
                        className={css`
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                          justify-content: flex-start;
                          gap: 33px;
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            font-weight: 500;
                            display: inline-block;
                            min-width: 50px;
                            z-index: 2;
                            @media screen and (max-width: 450px) {
                              font-size: 16px;
                            }
                          `}
                        >
                          Save
                        </div>
                        <div
                          className={css`
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            padding: 0px 15px 25px 16px;
                            box-sizing: border-box;
                            width: 50px;
                            height: 50px;
                          `}
                        >
                          <img
                            className={css`
                              height: 25px;
                              width: 18.8px;
                              position: relative;
                              z-index: 2;
                            `}
                            loading="lazy"
                            alt=""
                            src="/vector-2.svg"
                          />
                        </div>
                        <div
                          className={css`
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            padding: 0px 15px 25px 16px;
                          `}
                        >
                          <div
                            className={css`
                              display: flex;
                              flex-direction: column;
                              align-items: flex-start;
                              justify-content: flex-start;
                              gap: 58px;
                            `}
                          >
                            <img
                              className={css`
                                width: 18.8px;
                                height: 25px;
                                position: relative;
                                z-index: 2;
                              `}
                              loading="lazy"
                              alt=""
                              src="/vector-2.svg"
                            />
                            <img
                              className={css`
                                width: 18.8px;
                                height: 25px;
                                position: relative;
                                z-index: 2;
                              `}
                              loading="lazy"
                              alt=""
                              src="/vector-2.svg"
                            />
                          </div>
                        </div>
                        <div
                          className={css`
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: flex-start;
                            padding: 0px 15px 0px 16px;
                          `}
                        >
                          <img
                            className={css`
                              height: 25px;
                              width: 18.8px;
                              position: relative;
                              z-index: 2;
                            `}
                            loading="lazy"
                            alt=""
                            src="/vector-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className={css`
            width: 348px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            position: relative;
            min-width: 348px;
            max-width: 100%;
            @media screen and (max-width: 1025px) {
              flex: 1;
            }
            @media screen and (max-width: 450px) {
              min-width: 100%;
            }
          `}
        >
          {/* <img
            className={css`
              height: 100%;
              width: 1136px;
              position: absolute;
              margin: 0 !important;
              top: 0px;
              bottom: 0px;
              left: -788px;
              border-radius: 35px;
              max-height: 100%;
              z-index: 1;
            `}
            alt=""
            src="/rectangle-1.svg"
          /> */}
          <ProfileCard />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
