import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

// Usando a estratégia de Lazy-Loading do NextJS
const Chart = dynamic( () => import( 'react-apexcharts' ), {
  ssr: false,
} )

// Estilização do 'apexChart'
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-10-18T00:00:00.000Z',
      '2022-10-19T00:00:00.000Z',
      '2022-10-20T00:00:00.000Z',
      '2022-10-21T00:00:00.000Z',
      '2022-10-22T00:00:00.000Z',
      '2022-10-23T00:00:00.000Z',
      '2022-10-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

// Dados a serem processados pelo 'apexChart'
const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
]


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Flex direction={'column'} h='100vh'>
        <Header />

        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
          <Sidebar />

          <SimpleGrid flex='1' gap='4' minChildWidth={'320px'} alignItems='flex-start'>
            <Box
              p={['6', '8']}
              bg='gray.800'
              borderRadius={8}
              pb='4'
            >
              <Text fontSize='lg' mb='4'>Inscritos da Semana</Text>
              <Chart type="area" height={160} options={options} series={series} />
            </Box>
            <Box
              p={['6', '8']}
              bg='gray.800'
              borderRadius={8}
              pb='4'
            >
              <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
              <Chart type="area" height={160} options={options} series={series} />
            </Box>

          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}