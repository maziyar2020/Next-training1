import axios from "axios";
import { useRouter } from "next/router";
import Loading from '../../../components/Loading/Loading'

const Episode = ({ episode }) => {
    const router = useRouter()

    if (router.isFallback) {
        return (
            <div className="loading">
                <Loading />
            </div>)
    }
    return (
        <>
            {episode.air_date}
        </>
    );
}

export default Episode;


export async function getStaticPaths() {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`)

    const paths = data.results.map(path => {
        return {
            params: { episodeId: `${path.id}` }
        }
    })


    return {
        paths,
        fallback: true
    }

}


export async function getStaticProps({ params }) {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${params.episodeId}`)

    return {
        props: {
            episode: data
        }
    }
}

