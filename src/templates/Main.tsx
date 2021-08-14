import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="">
    {props.meta}

    <div className="">
      <div className="">
        <div className="">
          <div className="">{Config.title}</div>
          <div className="">{Config.description}</div>
        </div>
        <div>
          <Navbar>
            <li className="">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/about/">
                <a>About</a>
              </Link>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="">{props.children}</div>

      <div className="">
        Alex Blog
      </div>
    </div>
  </div>
);

export { Main };
