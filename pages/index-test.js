import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
} from '@rebass/forms'
import { Box, Flex, Button, Card } from 'rebass'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Notify.is</title>
        <meta name="author" content="Oliver Proud" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Box
        as='form'
        action='/api/hello'
        onSubmit={e => e.preventDefault()}
        m='auto'
        >
        <Flex mx={-2} py={3} flexDirection='column'>
          <Box px={2} pb={2}>
            <Label htmlFor='firstname'>First name</Label>
            <Input
              id='firstname'
              name='firstname'
              type='text'
              placeholder='First name'
              required
            />
          </Box>
          <Box px={2} pb={2}>
            <Label htmlFor='lastname'>Last name</Label>
            <Input
              id='lastname'
              name='lastname'
              type='text'
              placeholder='Last name'
              required
            />
          </Box>
          <Box px={2} pb={2}>
            <Label htmlFor='email'>Email address</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='email@address.com'
              required
            />
          </Box>
        </Flex>

        <Flex>
          <Box>
            <Button type='submit'>
              Beep
            </Button>
          </Box>
        </Flex>
      </Box>


      <Footer />

    </Layout>
  )
}
