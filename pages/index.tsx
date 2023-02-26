import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import NavBar from "../components/NavBar"
import Disconnected from "../components/Disconnected"
import { connected } from "process"
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../components/Connected"
import HomeBackground from "../assets/home-background.png"

const Home: NextPage = () => {
  const {connected} = useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title>CLTHing Collection</title>
        <meta name="The NFT Collection for Fashion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" : "url(/images/background.png)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
					{<NavBar />}

          <Spacer />
          <Center>
						{ connected ? <Connected/> : <Disconnected /> }
                </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/ilovespectra"
                target="_blank"
                rel="noopener noreferrer"
              >
                CLTHing Items for Fashion Babes
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home