import Section from "@/components/Section";
import Table from "@/components/Table";
import Audio from "@/components/Audio";

const references = [
  {
    citation: "Casanova, E., Davis, K., Gölge, E., Göknar, G., Gulea, I., Hart, L., ... & Weber, J. (2024). XTTS: a Massively Multilingual Zero-Shot Text-to-Speech Model. arXiv preprint arXiv:2406.04904.",
    link: "https://arxiv.org/abs/2406.04904"
  },
  {
    citation: "Wang, C., Chen, S., Wu, Y., Zhang, Z., Zhou, L., Liu, S., ... & Wei, F. (2023). Neural codec language models are zero-shot text to speech synthesizers. arXiv preprint arXiv:2301.02111.",
    link: "https://arxiv.org/abs/2301.02111"
  },
  {
    citation: "Casanova, E., Weber, J., Shulby, C. D., Junior, A. C., Gölge, E., & Ponti, M. A. (2022, June). Yourtts: Towards zero-shot multi-speaker tts and zero-shot voice conversion for everyone. In International Conference on Machine Learning (pp. 2709-2720). PMLR.",
    link: "https://proceedings.mlr.press/v162/casanova22a.html"
  }
]

const inspiration = [

  {
    citation: "Baas, M., van Niekerk, B., & Kamper, H. (2023). Voice conversion with just nearest neighbors. arXiv preprint arXiv:2305.18975.",
    link: "https://arxiv.org/abs/2305.18975"
  }
]

function getRowDataMOS(dataset: string, spk: string, num: string) {
  const file_name = `gen_${spk}_${num}`


  return {
    "Ground Truth": <Audio path={`samples/${dataset}/ground_truth/${spk}/${file_name}.wav`} />,
    "X-TTS": <Audio path={`samples/${dataset}/xtts/${spk}/${file_name}.wav`} />,
    "VALL-E": <Audio path={`samples/${dataset}/valle_v2/${spk}/${file_name}.wav`} />,
    "YourTTS": <Audio path={`samples/${dataset}/yourtts/${spk}/${file_name}.wav`} />,
    "SelectTTS w/o sub-sequence match": <Audio path={`samples/${dataset}/selectTTS_no_subsmatch/${spk}/${file_name}.wav`} />,
    "SelectTTS with sub-sequence match": <Audio path={`samples/${dataset}/selectTTS_with_subsmatch/${spk}/${file_name}.wav`} />
  }
}

function getRowDataSMOS(dataset: string, spk: string, num: string) {
  const file_name = `gen_${spk}_${num}`


  return {
    "Target Speaker": <Audio path={`samples/${dataset}/ground_truth/${spk}/${file_name}.wav`} />,
    "X-TTS": <Audio path={`samples/${dataset}/xtts/${spk}/${file_name}.wav`} />,
    "VALL-E": <Audio path={`samples/${dataset}/valle_v2/${spk}/${file_name}.wav`} />,
    "YourTTS": <Audio path={`samples/${dataset}/yourtts/${spk}/${file_name}.wav`} />,
    "SelectTTS w/o sub-sequence match": <Audio path={`samples/${dataset}/selectTTS_no_subsmatch/${spk}/${file_name}.wav`} />,
    "SelectTTS with sub-sequence match": <Audio path={`samples/${dataset}/selectTTS_with_subsmatch/${spk}/${file_name}.wav`} />
  }
}

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8 mx-auto px-8 md:px-48 lg:64 py-8 sm:py-16">
      <Section
        title="SelectTTS: Synthesizing anyone's voice via discrete unit-based frame selection"
        body=""
      />
      <Section
        title="Abstract"
        body="We design a simple alternative to this. We propose SelectTTS, a novel method to select the appropriate frames from the target speaker and decode using frame-level self-supervised learning (SSL) features. We show that this approach can effectively capture speaker characteristics for unseen speakers, and achieves comparable results to other multi-speaker TTS frameworks in both objective and subjective metrics. With SelectTTS, we show that frame selection from the target speaker's speech is a direct way to achieve generalization in unseen speakers."

      />

      <Section
        title="Purposed Method"
      >
        <img src="figures/SelectTTS_v1.png" alt="SelectTTS" />
      
        <div className="mt-4">
          <p className="text-sm sm:text-md italic text-justify">
          Proposed SelectTTS framework with the frame-selection method. In the frame selection, frames z<sub>1</sub>,z<sub>2</sub>,z<sub>3</sub>,z<sub>4</sub> are chosen through subsequence matching and frames z<sub>7</sub>, z<sub>9</sub>,z<sub>6</sub> and z<sub>10</sub> are chosen via inverse k-means sampling
          </p>
        </div>
      </Section>


      <Section
        title="Observe the naturalness :)"
      >
        <Table
          data={[
            getRowDataMOS("generated_samples", "4446", "0000"),
            getRowDataMOS("generated_samples", "4446", "0010"),
            getRowDataMOS("generated_samples", "4446", "0016"),
          ]}
        />
      </Section>

    

      <Section
        title="Observe the speaker similarity"
      >
        <Table
          data={[
            getRowDataMOS("generated_samples", "4446", "0000"),
            getRowDataMOS("generated_samples", "4446", "0010"),
            getRowDataMOS("generated_samples", "4446", "0016"),
          ]}
        />
      </Section>

     
      <Section
      title="Inspiration credit">
      <ul className="flex flex-col gap-y-4">
          {inspiration.map(({ citation, link }, index) => (
            <li key={index}>
              <a className="text-md sm:text-lg hover:underline transition-all" href={link}>
                [{index + 1}] {citation}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="References"
      >
        <ul className="flex flex-col gap-y-4">
          {references.map(({ citation, link }, index) => (
            <li key={index}>
              <a className="text-md sm:text-lg hover:underline transition-all" href={link}>
                [{index + 1}] {citation}
              </a>
            </li>
          ))}
        </ul>
      </Section>

    </div>
  )
}
