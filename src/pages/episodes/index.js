import axios from "axios";
import Link from "next/link";

const EpisodeList = ({ results }) => {

    return (
        <>
            {results.map(episode => {
                return <Link key={episode.id} href={`./episodes/${episode.id}`}>
                    <p className="episode" >{episode.name} - {episode.air_date}</p>
                </Link>

            })}
        </>
    );
}

export default EpisodeList;


export async function getStaticProps() {
    const { data } = await axios.get('https://rickandmortyapi.com/api/episode')
    return {
        props: data
    }
}


