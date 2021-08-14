import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Grommet, Anchor } from "grommet"
import { Apple, Ubuntu, Windows } from "grommet-icons"
import styled from "styled-components"
import logo from '../images/stahp/logo.png'
import { Link } from 'gatsby'
import useDownloadOS from "../hooks/useDownloadOS"

const Header = styled.header`
    display: flex;
    max-width: 768px;
    align-items: center;
    justify-content: space-between;
    margin: 36px auto 0;
    width: 100%;
`

const LogoLink = styled(Link)`
    margin: 0 auto;
    display: flex;
    width: 160px;
    align-items: center;
    text-decoration: none;
    gap: 12px;
    justify-content: center;
`

const Logo = styled.h1`
    background: url(${logo});
    width: 50px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
`

const MiniDownloads = styled.div`
    display: none;
    flex-wrap: wrap;
    gap: 12px;
    svg {
        path {
            fill: var(--color-foreground) !important;
        }
    }
`

const Heading = styled.h2`
    text-align: center;
    margin: 12px auto 0;
    font-size: 48px;
    line-height: 1.2;
`

const SecondaryHeading = styled(Heading)`
    font-size: 24px;
    margin: 48px auto 0;
`

const Downloads = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 24px auto 0;
    align-items: center;

    & > button {
        max-width: 300px;
    }
`

const Description = styled.p`
    text-align: center;
    margin: 48px auto 0;
    width: 80%;
`
const Wrapper = styled(Grommet)`
    padding: 6px;
    max-width: 768px;
    margin: 0 auto;

    @media (min-width: 768px) {
        ${Header} {
            align-items: space-between;

            ${LogoLink} {
                margin: 0;
            }
            
            ${MiniDownloads} {
                display: inline-flex;
            }
        }

        ${Heading} {
            font-size: 64px;
        }

        ${SecondaryHeading} {
            font-size: 48px;
        }

        ${Downloads} {
            button {
                max-width: unset;
            }
        }
    }
`

const DownloadButton = styled.a`
    display: inline-flex;
    gap: 12px;
    font-size: 16px;
    text-decoration: none;
    svg {
        path {
            fill: var(--color-foreground) !important;
        }
    }
`

const MainDownload = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 48px auto 0;
    ${DownloadButton} {
        padding: 12px;
        border-radius: 6px;
        background: var(--color-foreground);
        color: var(--color-background);
        svg {
           path {
                fill: var(--color-background) !important;
            }
        }
    }
`

const latest = {
    windows: `https://github.com/cesarvarela/stahp/releases/latest/download/stahp-1.8.0.Setup.exe`,
    mac: `https://github.com/cesarvarela/stahp/releases/latest/download/stahp-darwin-x64-1.8.0.zip`,
    ubuntu: `https://github.com/cesarvarela/stahp/releases/latest/download/stahp_1.8.0_amd64.deb`,
}

const DownloadLinks = () => {

    const os = useDownloadOS()

    const buttons = {
        windows: <DownloadButton key={"windows"} href={latest.windows}>Download for Windows <Windows /></DownloadButton>,
        mac: <DownloadButton key={"mac"} href={latest.mac}>Download for macOS <Apple /></DownloadButton>,
        ubuntu: <DownloadButton key={"ubuntu"} href={latest.ubuntu}>Download for Ubuntu <Ubuntu /></DownloadButton>,
    }

    const renderExcept = (os) => {

        return ['mac', 'windows', 'ubuntu'].filter(o => o !== os).map(o => buttons[o])
    }

    return <>
        {os && <MainDownload>{buttons[os]}</MainDownload>}
        <Downloads>
            {renderExcept(os)}
        </Downloads>
    </>
}

const StahpPage = () => {

    return <Layout content={<Link to="/">by Cesar Varela</Link>}>
        <SEO title="Stahp" />
        <Wrapper>
            <Header>
                <LogoLink to="/stahp">
                    <Logo />
                    <h1>Stahp</h1>
                </LogoLink>
                <MiniDownloads>
                    <Anchor plain icon={<Ubuntu />} />
                    <Anchor plain icon={<Apple />} />
                    <Anchor plain icon={<Windows />} />
                </MiniDownloads>
            </Header>

            <Heading>
                A break reminder you won’t ignore.
            </Heading>

            <DownloadLinks />

            <Description>
                You know that sitting for hours without breaks is terrible for your mind and body, but you still do it. You've installed other break reminders, and they work well at first. Still, after a while, you start ignoring them, your brain automatically clicks the "skip break" button. You sit on the chair for hours, your back starts to ache again, your eyes get dry, you look for another app, and the cycle continues...
            </Description>

            <SecondaryHeading>
                Make it your own
            </SecondaryHeading>

        </Wrapper>
    </Layout >
}

export default StahpPage
