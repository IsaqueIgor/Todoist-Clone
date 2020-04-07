import React, { useState } from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';

export const Sidebar = () => {

    return (
        <div className="sidebar" data-testid="sidebar">
          <ul className="sidebar__generic">
            <li data-testid='inbox'><span><FaInbox/></span><span>Inbox</span></li>
            <li data-testid='today'>
              <div
                data-testid="today-action"
                arial-label="Show today`s task"
                role="button"
              >
                <span>
                  <FaRegCalendar />
                </span>
                <span>Today</span>
              </div>
            </li>
            <li data-testid='next_7'>
              <div
                data-testid="next_7-action"
                aria-label="Show tasks for the next 7 days"
                tabIndex={0}
                role="button"
              >
                <span>
                  <FaRegCalendarAlt />
                </span>
                <span>Next 7 Days</span>
              </div>
            </li>
          </ul>
          <div
            className="sidebar__middle"
            aria-label="Show/hide projects"
            role="button"
            tabIndex={0}
            >
            <span><FaChevronDown /></span>
            <h2>Projects</h2>
          </div>

          <ul className="sidebar__projects"></ul>
        </div>

    );
}