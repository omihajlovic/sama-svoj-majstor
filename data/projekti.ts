export interface Projekat {
  id: number
  slug: string
  title: string
  category: string
  surface: string
  duration: string
  description: string
  problem: string
  resenje: string
  beforeImage: string
  afterImage: string
  gallery: string[]
  location: string
}

export const projekti: Projekat[] = [
  {
    id: 1,
    slug: 'stan-na-vracaru',
    title: 'Stan na Vračaru',
    category: 'Stanovi',
    surface: '52 m²',
    duration: '3 meseca',
    location: 'Beograd',
    description: 'Kompletna transformacija jednosobnog stana u funkcionalan i estetski uređen prostor za mladi par.',
    problem: 'Prostor je bio mračan, bez jasno definisanih zona i sa zastarelim nameštajem koji nije odgovarao načinu života klijenata. Nedostajalo je mesta za odlaganje, a kuhinja i dnevna soba su bile vizuelno odvojene bez logičnog toka.',
    resenje: 'Otvorili smo prostor između kuhinje i dnevne sobe, uveli neutralnu paletu sa toplim akcentima, i osmislili namenski nameštaj koji maksimizuje svaki kvadrat. Prirodno svetlo sada prožima ceo stan zahvaljujući pažljivo odabranim oknima i ogledalu u hodniku.',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    ],
  },
  {
    id: 2,
    slug: 'kuca-novi-sad',
    title: 'Kuća u Novom Sadu',
    category: 'Stanovi',
    surface: '145 m²',
    duration: '6 meseci',
    location: 'Novi Sad',
    description: 'Potpuna rekonstrukcija porodične kuće sa fokusom na funkcionalan porodični život i modernu estetiku.',
    problem: 'Kuća je bila podeljena na previše malih soba bez protoka vazduha i svetla. Svaka prostorija je bila uređena u drugačijem stilu, što je stvaralo vizuelni haos i osećaj skučenosti uprkos velikoj kvadraturi.',
    resenje: 'Srušili smo neke pregradne zidove i stvorili open-plan dnevni boravak koji se besprekorno nadovezuje na kuhinju i trpezariju. Uveli smo jedinstven dizajnerski jezik kroz celu kuću — prirodni materijali, neutralne boje, kvalitetni tekstili.',
    beforeImage: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1567767292278-a204638a3adf?w=800&q=80',
    ],
  },
  {
    id: 3,
    slug: 'kuhinja-zemun',
    title: 'Kuhinja u Zemunu',
    category: 'Kuhinje',
    surface: '18 m²',
    duration: '6 nedelja',
    location: 'Beograd, Zemun',
    description: 'Modernizacija male kuhinje koja je postala srce doma — funkcionalna, lepa i iznenađujuće prostrana.',
    problem: 'Kuhinja je bila funkcionalno zastarela sa malo radne površine i nelogičnim rasporedom elemenata. Osvjetljenje je bilo loše, a boje su činile prostor još manjem nego što jeste.',
    resenje: 'Redizajnirali smo raspored elemenata prema ergonomskom trouglu kuhanje-sudopera-frižider. Uveli smo krem kuhinjske elemente sa mesing detaljima, nadogradili sistem osvetljenja i dodali ostrvo koje služi i kao trpezarijski sto.',
    beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    ],
  },
  {
    id: 4,
    slug: 'restoran-mirela',
    title: 'Restoran "Mirela"',
    category: 'Ugostiteljstvo',
    surface: '80 m²',
    duration: '2 meseca',
    location: 'Beograd',
    description: 'Dizajn enterijera mediteranskog restorana koji stvara atmosferu topline i autentičnosti.',
    problem: 'Prostor je bio generičan i bez karaktera. Gosti nisu osećali posebno iskustvo, a restoran se nije isticao u okruženju. Rasveta je bila uniformna i bez atmosfere.',
    resenje: 'Stvorili smo zoning sa različitim atmosferama unutar jednog prostora — intimniji kutak za dvoje, zajednički sto za grupe, barska zona. Topla rasveta, prirodni materijali i mediteranski detalji su pretvorili prostor u destinaciju.',
    beforeImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80',
      'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    ],
  },
  {
    id: 5,
    slug: 'poslovni-prostor-palilula',
    title: 'Poslovni prostor na Paliluli',
    category: 'Poslovni prostori',
    surface: '65 m²',
    duration: '5 nedelja',
    location: 'Beograd, Palilula',
    description: 'Uređenje arhitektonskog studija koji odražava profesionalnost i kreativnost tima.',
    problem: 'Prostor je bio tipičan kancelarijski, bez inspiracije i bez veze sa delatnosti firme. Zaposleni nisu bili motivisani da borave u njemu, a klijenti nisu dobijali pravi utisak o studiou.',
    resenje: 'Kreirali smo otvoreni radni prostor sa više zona — zona za koncentraciju, prostor za saradnju i reprezentativni kutak za klijente. Materijali i boje su odabrani da reflektuju arhitektonske vrednosti studija.',
    beforeImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    ],
  },
  {
    id: 6,
    slug: 'soba-za-decu-vozdovac',
    title: 'Dečija soba na Voždovcu',
    category: 'Stanovi',
    surface: '14 m²',
    duration: '3 nedelje',
    location: 'Beograd, Voždovac',
    description: 'Kreativna i funkcionalna dečija soba koja raste zajedno sa detetom.',
    problem: 'Mala soba je bila pretrpana i bez jasne organizacije. Nameštaj nije odgovarao uzrastu deteta, a boje su bile previše agresivne i stimulativne za spavanje.',
    resenje: 'Uveli smo krevit na sprat koji oslobađa prostor za igru, modularne police i sistem za odlaganje. Paleta neutralnih boja sa mekim akcentima stvara prostor koji je stimulativan ali i miran — i lako se adaptira kako dete raste.',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
      'https://images.unsplash.com/photo-1567767292278-a204638a3adf?w=800&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    ],
  },
]
