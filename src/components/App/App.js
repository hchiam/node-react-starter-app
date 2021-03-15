import React from 'react'
import { makeStyles, CssBaseline } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
    container: {
        margin: 0,
    },
    code: {
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    },
    app: {
        textAlign: 'center',
    },
    appLogo: {
        height: '40vmin',
        pointerEvents: 'none',
    },
    appHeader: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
    welcomeMessage: {
        transform: 'skewY(3deg)',
    },
    appLink: {
        color: '#61dafb',
    },
}))

export default function App() {
    const classes = useStyles()
    const [data, setData] = React.useState()
    const [hasComponentInitialized, setHasComponentInitialized] = React.useState(false)

    const fetchData = React.useCallback(async () => {
        const result = await fetch('/home')
        const response = await result.json()
        setData(response?.express)
    }, [])

    React.useEffect(() => {
        if (!data && !hasComponentInitialized) {
            fetchData()
            setHasComponentInitialized(true)
        }
    }, [data, hasComponentInitialized, fetchData])

    return (
        <React.Fragment>
            <CssBaseline />
            <Box className={clsx({ [classes.container]: true, [classes.app]: true })}>
                <Typography variant="h1" className={classes.appHeader}>
                    <img src="/logo.svg" className={classes.appLogo} alt="logo" />
                    <Typography className={classes.welcomeMessage}>Welcome to react-typescript-starter-app</Typography>
                    {!!data && <Typography>Server Response: {data}</Typography>}
                </Typography>
            </Box>
        </React.Fragment>
    )
}
