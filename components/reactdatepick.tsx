import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import styled, { css } from "styled-components";
import { addDays } from "date-fns";
registerLocale("ko", ko);
import "./calendar.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const aaaa = css`
  background-color: blue;
`;
const Sample: React.FC = () => {
  return <div>안녕하세욧</div>;
};
const Button = styled.button``;
const Icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
  >
    <g fill="none" fill-rule="evenodd">
      <path fill-rule="nonzero" d="M-14-14h42.974v44H-14z" />
      <path d="M-4.233-4h23.44v24h-23.44z" />
      <path
        fill="#000"
        d="M1.766 15.143h2.512V12.57H1.766v2.572zm3.07 0h2.79V12.57h-2.79v2.572zM1.766 12h2.512V9.143H1.766V12zm3.07 0h2.79V9.143h-2.79V12zm-3.07-3.429h2.512V6H1.766v2.571zm6.419 6.572h2.79V12.57h-2.79v2.572zM4.835 8.57h2.791V6h-2.79v2.571zm6.698 6.572h2.512V12.57h-2.512v2.572zM8.185 12h2.79V9.143h-2.79V12zm-3.07-7.714V1.714a.29.29 0 0 0-.28-.285h-.557a.29.29 0 0 0-.28.285v2.572c0 .151.132.285.28.285h.558a.29.29 0 0 0 .279-.285zM11.533 12h2.512V9.143h-2.512V12zM8.185 8.571h2.79V6h-2.79v2.571zm3.348 0h2.512V6h-2.512v2.571zm.28-4.285V1.714a.29.29 0 0 0-.28-.285h-.558a.29.29 0 0 0-.279.285v2.572c0 .151.13.285.279.285h.558a.29.29 0 0 0 .28-.285zm3.348-.572v11.429c0 .625-.506 1.143-1.116 1.143H1.766c-.61 0-1.116-.518-1.116-1.143V3.714c0-.625.506-1.143 1.116-1.143h1.117v-.857C2.883.93 3.51.286 4.278.286h.558c.767 0 1.395.643 1.395 1.428v.857H9.58v-.857c0-.785.628-1.428 1.395-1.428h.558c.768 0 1.395.643 1.395 1.428v.857h1.117c.61 0 1.116.518 1.116 1.143z"
      />
    </g>
  </svg>
);

class Example extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: addDays(new Date(), 5)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }
  render() {
    return (
      <>
        <p>한글 년도 드롭다운 이전선택불가 눌러도안꺼짐</p>
        <DatePicker
          customInput={Icon}
          minDate={new Date()}
          selected={this.state.startDate}
          onChange={this.handleChange}
          showYearDropdown
          dateFormatCalendar="MMMM"
          scrollableYearDropdown
          yearDropdownItemNumber={15}
          shouldCloseOnSelect={false}
        />
        <p>연,달 달력</p>
        <DatePicker
          selected={this.state.startDate}
          customInput={Icon}
          onChange={this.handleChange}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
        <p>커스텀헤더</p>
        <>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            renderCustomHeader={(params: {}) => <Sample />}
            customInput={Icon}
          />
          <p>시간선택</p>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            customInput={Icon}
          />
          <p>범위</p>
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChange}
          />

          <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
            minDate={this.state.startDate}
          />
          <p>css커스텀</p>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            popperClassName="aaaa"
            popperPlacement="top-end"
            popperModifiers={{
              offset: {
                enabled: true,
                offset: "5px, 10px"
              },
              preventOverflow: {
                enabled: true,
                escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
                boundariesElement: "viewport"
              }
            }}
          />
          <p>전체화면버전</p>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            withPortal
          />
        </>
      </>
    );
  }
}
export default Example;
