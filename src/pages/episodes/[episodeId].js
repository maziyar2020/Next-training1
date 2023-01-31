import axios from "axios";

const Episode = (episode) => {
    const { episodeList } = episode

    return (

        <>
            <div>
                name : {episodeList.name} , date : {episodeList.air_date}
            </div>
        </>
    );
}

export default Episode;

export async function getStaticPaths() {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`)
    const paths = data.results.map(episode => {
        return {
            params: { episodeId: `${episode.id}` }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${params.episodeId}`)
    return {
        props: {
            episodeList: data
        }
    }
}