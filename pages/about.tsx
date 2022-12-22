import type { NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const About: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    console.log("about page data", data)
    return (
        <div>
            About Page for experimenting On GetServer Side Props
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    const API_KEY = "J5YsBebS2UCAUlyqqcQmIJw9KYPa6q42"
    const URL = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`
    const res = await fetch(URL)
    const data = await res.json()

    return {
        props: { data }
    }

}

export default About;