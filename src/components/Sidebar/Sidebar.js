import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';

import { StyledSideNav } from "./styles";

const items = [
    { name: 'Me', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Work', path: '/work' },
    { name: 'Education', path: '/education' },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
            <SideNavItems>
                {items.map( item => (
                    <SideNavLink
                        isActive={location.pathname === '/' && item.path === '/' ? true : location.pathname === item.path}
                        element={Link}
                        to={item.path}
                        key={item.name}
                    >
                        {item.name}
                    </SideNavLink>
                ))}
            </SideNavItems>
        </StyledSideNav>
    );
};

export default Sidebar;
