import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => {
    return (
        <header className="header" data-testid="header">
          <nav>
              <div className='logo'>
                <img src='../../assets/logo.png' alt='Todoist'/>
              </div>
              <div className='settings'>
                <ul>
                    <li className="settings__add">
                        <button
                            data-testid="quick-add-task-action"
                            aria-label="Quick add task"
                            type="button"
                        >+</button>
                    </li>
                    <li>
                        <FaPizzaSlice />
                    </li>
                </ul>
              </div>
          </nav>
        </header>
    );
}