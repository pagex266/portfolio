import React from 'react';
import {useLocation} from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import {Header, HeaderContainer, Image, ViewResumeLink} from "./styles";

const UserHeader = ({ user }) => {
    const location = useLocation();
    let username = user.basics.username
    let gitConnectedPath = `https://gitconnected.com/${username}`

    return (
        <HeaderContainer isHome={location.pathname === '/'}>
            <Header>
                <Image src={user.basics.picture} />
                <div>
                    <h2>{user.basics.name}</h2>
                    <h4>
                        <a
                            href={gitConnectedPath}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            @{username}
                        </a>
                    </h4>
                    <p>{user.basics.label}</p>
                    <p>Coding in {user.basics.region}</p>
                    <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
                    <p>{user.basics.headline}</p>
                </div>
            </Header>
            <div>
                <ViewResumeLink
                    href={`https://gitconnected.com/${username}/resume`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Résumé</span>
                    <ArrowRight16 />
                </ViewResumeLink>
            </div>
        </HeaderContainer>

    )
}

export default UserHeader;
