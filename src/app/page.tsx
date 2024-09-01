import Section from "@/components/Section";
import Table from "@/components/Table";
import Audio from "@/components/Audio";
import Link from 'next/link';

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
    "Ground Truth": <Audio path={`samples/ground_truth/${spk}/${file_name}.wav`} />,
    "X-TTS": <Audio path={`samples/${dataset}/xtts/${spk}/${file_name}.wav`} />,
    "VALL-E": <Audio path={`samples/${dataset}/valle_v2/${spk}/${file_name}.wav`} />,
    "YourTTS": <Audio path={`samples/${dataset}/yourtts/${spk}/${file_name}.wav`} />,
    "SelectTTS (no sub-sequence)": <Audio path={`samples/${dataset}/selectTTS_no_subsmatch/${spk}/${file_name}.wav`} />,
    "SelectTTS (with sub-sequence)": <Audio path={`samples/${dataset}/selectTTS_with_subsmatch/${spk}/${file_name}.wav`} />
  }
}

function getRowDataSMOS(dataset: string, spk: string, num: string) {
  const file_name = `gen_${spk}_${num}`


  return {
    "Target Speaker": <Audio path={`samples/${dataset}/ground_truth/${spk}/${file_name}.wav`} />,
    "SelectTTS (no sub-sequence)": <Audio path={`samples/${dataset}/selectTTS_no_subsmatch/${spk}/${file_name}.wav`} />,
    "SelectTTS (with sub-sequence)": <Audio path={`samples/${dataset}/selectTTS_with_subsmatch/${spk}/${file_name}.wav`} />,
    "X-TTS": <Audio path={`samples/${dataset}/xtts/${spk}/${file_name}.wav`} />,
    "VALL-E": <Audio path={`samples/${dataset}/valle_v2/${spk}/${file_name}.wav`} />,
    "YourTTS": <Audio path={`samples/${dataset}/yourtts/${spk}/${file_name}.wav`} />
    
  }
}


function getRowDataRefdur(dataset: string, spk: string, num: string) {
  const file_name = `gen_${spk}_${num}`


  return {
    "Ground Truth": <Audio path={`samples/ground_truth/${spk}/${file_name}.wav`} />,
    "30 seconds": <Audio path={`samples/${dataset}/duration/30sec/selectTTS_with_subsmatch/${spk}/${file_name}.wav`} />,
    "1 minute": <Audio path={`samples/${dataset}/duration/1min/selectTTS_with_subsmatch/${spk}/${file_name}.wav`} />,
    "3 minutes": <Audio path={`samples/${dataset}/duration/3min/selectTTS_with_subsmatch/${spk}/${file_name}.wav`} />,
    "5 Minutes": <Audio path={`samples/${dataset}/duration/5min/selectTTS_with_subsmatch/${spk}/${file_name}.wav`} />
  
  }
}

function getRowDataPrematch(dataset: string, spk: string, num: string) {
  const file_name = `gen_${spk}_${num}`


  return {
    "Ground Truth": <Audio path={`samples/ground_truth/${spk}/${file_name}.wav`} />,
    "Vocoder (no prematched fine-tuning)": <Audio path={`samples/${dataset}/fine_tuned/selectTTS_without_finetuning/${spk}/${file_name}.wav`} />,
    "Vocoder (prematched fine-tuning)": <Audio path={`samples/${dataset}/fine_tuned/selectTTS_with_finetuning/${spk}/${file_name}.wav`} />

  }
}


function getRowDataTempSampl(dataset: string, spk: string, num: string) {
  const file_name = `gen_${spk}_${num}`


  return {
    "Ground Truth": <Audio path={`samples/ground_truth/${spk}/${file_name}.wav`} />,
    "SelectTTS (only inv k-means (rand))": <Audio path={`samples/${dataset}/selection_strategy/inv_kmeans_rand/${spk}/${file_name}.wav`} />,
    "SelectTTS (only inv k-means (avg))": <Audio path={`samples/${dataset}/selection_strategy/inv_kmeans_avg/${spk}/${file_name}.wav`} />,
    "SelectTTS (inv k-means (rand) + sub-match)": <Audio path={`samples/${dataset}/selection_strategy/inv_kmeans_rand_subseq/${spk}/${file_name}.wav`} />,
    "SelectTTS (inv k-means (avg) + sub-match)": <Audio path={`samples/${dataset}/selection_strategy/inv_kmeans_avg_subseq/${spk}/${file_name}.wav`} />
    
  }
}

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8 mx-auto px-8 md:px-48 lg:64 py-8 sm:py-16">
    <Section
  title="SelectTTS: Synthesizing Anyone’s Voice via Discrete Unit-Based Frame Selection"
  body="" 
/>
<div className="flex flex-col mt-0">
        <p className="text-sm sm:text-md text-justify">
          Ismail Rasim Ulgen*, Shreeram Suresh Chandra*, Junchen Lu, Berrak Sisman
        </p>
        <p className="text-sm sm:text-md italic text-justify mt-[-4px]">
          *Equal contribution
        </p>
      </div>
        <div>
      {/* Button 2: External Link to Google */}
      <Link href="/about" passHref>
        <button style={{ marginRight: '10px' }}>Paper pre-print</button>
      </Link>

      
      {/* Button 2: External Link to Google */}
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <button>Official implementation - coming soon</button>
      </a>
    </div>
      <Section
        title="Proposed Method"
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <img
    src="figures/Tokenizers.png"  // Replace with the path to your second image
    alt="Tokenizers"
    style={{ width: '30%', maxWidth: '600px', height: 'auto' }}

  />
  <img
    src="figures/SelectTTS_v1.png"
    alt="SelectTTS"
    style={{ width: '100%', maxWidth: '700px', height: 'auto' }}
  />
  
</div>
        <div className="mt-4">
          <p className="text-sm sm:text-md italic text-justify">
          Proposed SelectTTS framework with the frame-selection method. In the frame selection, frames z<sub>1</sub>,z<sub>2</sub>,z<sub>3</sub>,z<sub>4</sub> are chosen through subsequence matching and frames z<sub>7</sub>, z<sub>9</sub>,z<sub>6</sub> and z<sub>10</sub> are chosen via inverse k-means sampling
          </p>
        </div>
      </Section>


      <Section
        title="Comparison with Baselines"
      >
        <Table
          data={[
            getRowDataMOS("generated_samples", "7127", "0005"),
            getRowDataMOS("generated_samples", "8455", "0013"),
            getRowDataMOS("generated_samples", "7176", "0019"),
            getRowDataMOS("generated_samples", "4446", "0000"),
            getRowDataMOS("generated_samples", "4992", "0015"),
            getRowDataMOS("generated_samples", "5142", "0002")
            
          ]}
        />
      </Section>

    

     


      <Section
        title="How much reference speech do we need?"
      >
        <Table
          data={[
            getRowDataRefdur("demo_samples", "7176", "0013"),
            getRowDataRefdur("demo_samples", "1320", "0014"),
            getRowDataRefdur("demo_samples", "4507", "0004"),
            getRowDataRefdur("demo_samples", "3570", "0002"),
            getRowDataRefdur("demo_samples", "2300", "0005"),
            getRowDataRefdur("demo_samples", "4970", "0012")
          ]}
        />
      </Section>
     
      <Section
        title="Effect of different frame selection strategies"
      >
        <Table
          data={[
            getRowDataTempSampl("demo_samples", "8455", "0013"),
            getRowDataTempSampl("demo_samples", "5142", "0008"),
            getRowDataTempSampl("demo_samples", "4970", "0012"),
            getRowDataTempSampl("demo_samples", "7729", "0015")
          ]}
        />
      </Section>

      <Section
        title="Effect of vocoder fine-tuning"
      >
        <Table
          data={[
            // getRowDataPrematch("demo_samples", "4446", "0010"), NOT SO GOOD
            getRowDataPrematch("demo_samples", "7729", "0019"),
            getRowDataPrematch("demo_samples", "7729", "0011"),
            // getRowDataPrematch("demo_samples", "3570", "0008"), NOT GOOD
            getRowDataPrematch("demo_samples", "6829", "0009"),
            // getRowDataPrematch("demo_samples", "2300", "0005"),
            // getRowDataPrematch("demo_samples", "7127", "0000"),
            getRowDataPrematch("demo_samples", "4970", "0015")            
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
        title="Baselines"
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
