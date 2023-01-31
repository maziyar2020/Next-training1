import axios from "axios";
import Link from "next/link";


const EpisodeList = ({ episodeList }) => {
    const episodes = episodeList.results

    return (
        episodes.map(episode =>
            <Link href={`/episodes/${episode.id}`} passHref>
                <div key={episode.id} className="episode">

                    {episode.episode} - name : {episode.name}
                </div>
            </Link>

        )
    );
}

export default EpisodeList;

export async function getStaticProps() {
    const { data } = await axios.get('https://rickandmortyapi.com/api/episode')
    return {
        props: {
            episodeList: data
        }
    }
}