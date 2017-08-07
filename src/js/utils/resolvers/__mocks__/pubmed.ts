import { parsePubmedJSON } from 'utils/parsers/';

const data: CSL.Data = {
    uids: ['11111', '22222', '33333', '44444', '55555', '66666', '77777', '88888', '99999'],
    '11111': {
        uid: '11111',
        pubdate: '1976',
        epubdate: '',
        source: 'Exp Pathol (Jena)',
        authors: [
            {
                name: 'Kittlick PD',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Neupert G',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Bolck F',
                authtype: 'Author',
                clusterid: '',
            },
        ],
        lastauthor: 'Bolck F',
        title:
            'Acid mucopolysaccharides in fibroblast cultures. 1. Influence of cell density, pH-value and lactate concentration on the MPS distribution pattern.',
        sorttitle:
            'acid mucopolysaccharides in fibroblast cultures 1 influence of cell density ph value and lactate concentration on the mps distribution pattern',
        volume: '12',
        issue: '3-4',
        pages: '149-58',
        lang: ['eng'],
        nlmuniqueid: '0113124',
        issn: '0014-4908',
        essn: '',
        pubtype: ['Journal Article'],
        recordstatus: 'PubMed - indexed for MEDLINE',
        pubstatus: '4',
        articleids: [
            {
                idtype: 'pubmed',
                idtypen: 1,
                value: '11111',
            },
            {
                idtype: 'rid',
                idtypen: 8,
                value: '11111',
            },
            {
                idtype: 'eid',
                idtypen: 8,
                value: '11111',
            },
        ],
        history: [
            {
                pubstatus: 'pubmed',
                date: '1976/01/01 00:00',
            },
            {
                pubstatus: 'medline',
                date: '1976/01/01 00:01',
            },
            {
                pubstatus: 'entrez',
                date: '1976/01/01 00:00',
            },
        ],
        references: [],
        attributes: ['Has Abstract'],
        pmcrefcount: 1,
        fulljournalname: 'Experimentelle Pathologie',
        elocationid: '',
        doctype: 'citation',
        srccontriblist: [],
        booktitle: '',
        medium: '',
        edition: '',
        publisherlocation: '',
        publishername: '',
        srcdate: '',
        reportnumber: '',
        availablefromurl: '',
        locationlabel: '',
        doccontriblist: [],
        docdate: '',
        bookname: '',
        chapter: '',
        sortpubdate: '1976/01/01 00:00',
        sortfirstauthor: 'Kittlick PD',
        vernaculartitle: '',
    },
    '22222': {
        uid: '22222',
        pubdate: '1977 Sep-Oct',
        epubdate: '',
        source: 'Acta Neurol (Napoli)',
        authors: [
            {
                name: 'Fiorillo A',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Maietta A',
                authtype: 'Author',
                clusterid: '',
            },
        ],
        lastauthor: 'Maietta A',
        title:
            '[Clinico-statistical findings on irreversible chronic tardive dyskinesia caused by psychopharmaceuticals].',
        sorttitle:
            'clinico statistical findings on irreversible chronic tardive dyskinesia caused by psychopharmaceuticals',
        volume: '32',
        issue: '5',
        pages: '569-78',
        lang: ['ita'],
        nlmuniqueid: '0421100',
        issn: '0001-6276',
        essn: '',
        pubtype: ['Journal Article'],
        recordstatus: 'PubMed - indexed for MEDLINE',
        pubstatus: '4',
        articleids: [
            {
                idtype: 'pubmed',
                idtypen: 1,
                value: '22222',
            },
            {
                idtype: 'rid',
                idtypen: 8,
                value: '22222',
            },
            {
                idtype: 'eid',
                idtypen: 8,
                value: '22222',
            },
        ],
        history: [
            {
                pubstatus: 'pubmed',
                date: '1977/09/01 00:00',
            },
            {
                pubstatus: 'medline',
                date: '1977/09/01 00:01',
            },
            {
                pubstatus: 'entrez',
                date: '1977/09/01 00:00',
            },
        ],
        references: [],
        attributes: [],
        pmcrefcount: '',
        fulljournalname: 'Acta neurologica',
        elocationid: '',
        doctype: 'citation',
        srccontriblist: [],
        booktitle: '',
        medium: '',
        edition: '',
        publisherlocation: '',
        publishername: '',
        srcdate: '',
        reportnumber: '',
        availablefromurl: '',
        locationlabel: '',
        doccontriblist: [],
        docdate: '',
        bookname: '',
        chapter: '',
        sortpubdate: '1977/09/01 00:00',
        sortfirstauthor: 'Fiorillo A',
        vernaculartitle:
            'Rilievi clinico-statistici sulla discinesia tardiva cronicizzata irreversibile da psicofarmaci.',
    },
    '33333': {
        uid: '33333',
        pubdate: '1979 Feb 16',
        epubdate: '',
        source: 'MMW Munch Med Wochenschr',
        authors: [
            {
                name: 'Kersten W',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Brade W',
                authtype: 'Author',
                clusterid: '',
            },
        ],
        lastauthor: 'Brade W',
        title: "[Treatment of bronchitis with cefaclor (Panoral) (author's transl)].",
        sorttitle: 'treatment of bronchitis with cefaclor panoral author s transl',
        volume: '121',
        issue: '7',
        pages: '247-50',
        lang: ['ger'],
        nlmuniqueid: '7801805',
        issn: '0341-3098',
        essn: '',
        pubtype: ['Journal Article'],
        recordstatus: 'PubMed - indexed for MEDLINE',
        pubstatus: '4',
        articleids: [
            {
                idtype: 'pubmed',
                idtypen: 1,
                value: '33333',
            },
            {
                idtype: 'rid',
                idtypen: 8,
                value: '33333',
            },
            {
                idtype: 'eid',
                idtypen: 8,
                value: '33333',
            },
        ],
        history: [
            {
                pubstatus: 'pubmed',
                date: '1979/02/16 00:00',
            },
            {
                pubstatus: 'medline',
                date: '1979/02/16 00:01',
            },
            {
                pubstatus: 'entrez',
                date: '1979/02/16 00:00',
            },
        ],
        references: [],
        attributes: ['Has Abstract'],
        pmcrefcount: '',
        fulljournalname: 'MMW, Munchener medizinische Wochenschrift',
        elocationid: '',
        doctype: 'citation',
        srccontriblist: [],
        booktitle: '',
        medium: '',
        edition: '',
        publisherlocation: '',
        publishername: '',
        srcdate: '',
        reportnumber: '',
        availablefromurl: '',
        locationlabel: '',
        doccontriblist: [],
        docdate: '',
        bookname: '',
        chapter: '',
        sortpubdate: '1979/02/16 00:00',
        sortfirstauthor: 'Kersten W',
        vernaculartitle: 'Behandlung von Bronchitiden mit Cefaclor (Panoral).',
    },
    '44444': {
        uid: '44444',
        pubdate: '1979 Nov',
        epubdate: '',
        getRemoteDatasource: 'Appl Environ Microbiol',
        authors: [
            {
                name: 'Merkal RS',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Crawford JA',
                authtype: 'Author',
                clusterid: '',
            },
        ],
        lastauthor: 'Crawford JA',
        title:
            'Heat inactivation of Mycobacterium avium-Mycobacterium intracellulare complex organisms in aqueous suspension.',
        sorttitle:
            'heat inactivation of mycobacterium avium mycobacterium intracellulare complex organisms in aqueous suspension',
        volume: '38',
        issue: '5',
        pages: '827-30',
        lang: ['eng'],
        nlmuniqueid: '7605801',
        issn: '0099-2240',
        essn: '1098-5336',
        pubtype: ['Journal Article'],
        recordstatus: 'PubMed - indexed for MEDLINE',
        pubstatus: '4',
        articleids: [
            {
                idtype: 'pubmed',
                idtypen: 1,
                value: '44444',
            },
            {
                idtype: 'pmc',
                idtypen: 8,
                value: 'PMC243594',
            },
            {
                idtype: 'rid',
                idtypen: 8,
                value: '44444',
            },
            {
                idtype: 'eid',
                idtypen: 8,
                value: '44444',
            },
            {
                idtype: 'pmcid',
                idtypen: 5,
                value: 'pmc-id: PMC243594;',
            },
        ],
        history: [
            {
                pubstatus: 'pubmed',
                date: '1979/11/01 00:00',
            },
            {
                pubstatus: 'medline',
                date: '1979/11/01 00:01',
            },
            {
                pubstatus: 'entrez',
                date: '1979/11/01 00:00',
            },
        ],
        references: [],
        attributes: ['Has Abstract'],
        pmcrefcount: 5,
        fulljournalname: 'Applied and environmental microbiology',
        elocationid: '',
        doctype: 'citation',
        srccontriblist: [],
        booktitle: '',
        medium: '',
        edition: '',
        publisherlocation: '',
        publishername: '',
        srcdate: '',
        reportnumber: '',
        availablefromurl: '',
        locationlabel: '',
        doccontriblist: [],
        docdate: '',
        bookname: '',
        chapter: '',
        sortpubdate: '1979/11/01 00:00',
        sortfirstauthor: 'Merkal RS',
        vernaculartitle: '',
    },
    '55555': {
        uid: '55555',
        pubdate: '1976 Jan 31',
        epubdate: '',
        source: 'Lancet',
        authors: [
            {
                name: 'Wigglesworth JS',
                authtype: 'Author',
                clusterid: '',
            },
        ],
        lastauthor: 'Wigglesworth JS',
        title: 'Letter: Buffer therapy and intraventricular haemorrhage.',
        sorttitle: 'letter buffer therapy and intraventricular haemorrhage',
        volume: '1',
        issue: '7953',
        pages: '249',
        lang: ['eng'],
        nlmuniqueid: '2985213R',
        issn: '0140-6736',
        essn: '1474-547X',
        pubtype: ['Journal Article'],
        recordstatus: 'PubMed - indexed for MEDLINE',
        pubstatus: '4',
        articleids: [
            {
                idtype: 'pubmed',
                idtypen: 1,
                value: '55555',
            },
            {
                idtype: 'rid',
                idtypen: 8,
                value: '55555',
            },
            {
                idtype: 'eid',
                idtypen: 8,
                value: '55555',
            },
        ],
        history: [
            {
                pubstatus: 'pubmed',
                date: '1976/01/31 00:00',
            },
            {
                pubstatus: 'medline',
                date: '1976/01/31 00:01',
            },
            {
                pubstatus: 'entrez',
                date: '1976/01/31 00:00',
            },
        ],
        references: [],
        attributes: [],
        pmcrefcount: 1,
        fulljournalname: 'Lancet (London, England)',
        elocationid: '',
        doctype: 'citation',
        srccontriblist: [],
        booktitle: '',
        medium: '',
        edition: '',
        publisherlocation: '',
        publishername: '',
        srcdate: '',
        reportnumber: '',
        availablefromurl: '',
        locationlabel: '',
        doccontriblist: [],
        docdate: '',
        bookname: '',
        chapter: '',
        sortpubdate: '1976/01/31 00:00',
        sortfirstauthor: 'Wigglesworth JS',
        vernaculartitle: '',
    },
    '66666': {
        uid: '66666',
        pubdate: '1975 Spring',
        epubdate: '',
        source: 'Penn Dent J (Phila)',
        authors: [
            {
                name: 'Weiss K',
                authtype: 'Author',
                clusterid: '',
            },
        ],
        lastauthor: 'Weiss K',
        title: 'Dentistry (stomatology) in China.',
        sorttitle: 'dentistry stomatology in china',
        volume: '77',
        issue: '2-3',
        pages: '41-2',
        lang: ['eng'],
        nlmuniqueid: '0417461',
        issn: '0031-4331',
        essn: '',
        pubtype: ['Journal Article'],
        recordstatus: 'PubMed - indexed for MEDLINE',
        pubstatus: '4',
        articleids: [
            {
                idtype: 'pubmed',
                idtypen: 1,
                value: '66666',
            },
            {
                idtype: 'rid',
                idtypen: 8,
                value: '66666',
            },
            {
                idtype: 'eid',
                idtypen: 8,
                value: '66666',
            },
        ],
        history: [
            {
                pubstatus: 'pubmed',
                date: '1975/01/01 00:00',
            },
            {
                pubstatus: 'medline',
                date: '1975/01/01 00:01',
            },
            {
                pubstatus: 'entrez',
                date: '1975/01/01 00:00',
            },
        ],
        references: [],
        attributes: [],
        pmcrefcount: '',
        fulljournalname: 'The Penn dental journal',
        elocationid: '',
        doctype: 'citation',
        srccontriblist: [],
        booktitle: '',
        medium: '',
        edition: '',
        publisherlocation: '',
        publishername: '',
        srcdate: '',
        reportnumber: '',
        availablefromurl: '',
        locationlabel: '',
        doccontriblist: [],
        docdate: '',
        bookname: '',
        chapter: '',
        sortpubdate: '1975/04/01 00:00',
        sortfirstauthor: 'Weiss K',
        vernaculartitle: '',
    },
    '77777': {
        uid: '77777',
        pubdate: '1978',
        epubdate: '',
        source: 'Eur Surg Res',
        authors: [
            {
                name: 'Abb J',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Grosse-Wilde H',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Scholz S',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Albert ED',
                authtype: 'Author',
                clusterid: '',
            },
        ],
        lastauthor: 'Albert ED',
        title:
            'Matching for DLA-A, DLA-B and DLA-D antigens and skin allograft survival in unrelated beagle dogs.',
        sorttitle:
            'matching for dla a dla b and dla d antigens and skin allograft survival in unrelated beagle dogs',
        volume: '10',
        issue: '2',
        pages: '142-5',
        lang: ['eng'],
        nlmuniqueid: '0174752',
        issn: '0014-312X',
        essn: '1421-9921',
        pubtype: ['Journal Article'],
        recordstatus: 'PubMed - indexed for MEDLINE',
        pubstatus: '4',
        articleids: [
            {
                idtype: 'pubmed',
                idtypen: 1,
                value: '77777',
            },
            {
                idtype: 'rid',
                idtypen: 8,
                value: '77777',
            },
            {
                idtype: 'eid',
                idtypen: 8,
                value: '77777',
            },
        ],
        history: [
            {
                pubstatus: 'pubmed',
                date: '1978/01/01 00:00',
            },
            {
                pubstatus: 'medline',
                date: '1978/01/01 00:01',
            },
            {
                pubstatus: 'entrez',
                date: '1978/01/01 00:00',
            },
        ],
        references: [],
        attributes: ['Has Abstract'],
        pmcrefcount: '',
        fulljournalname:
            'European surgical research. Europaische chirurgische Forschung. Recherches chirurgicales europeennes',
        elocationid: '',
        doctype: 'citation',
        srccontriblist: [],
        booktitle: '',
        medium: '',
        edition: '',
        publisherlocation: '',
        publishername: '',
        srcdate: '',
        reportnumber: '',
        availablefromurl: '',
        locationlabel: '',
        doccontriblist: [],
        docdate: '',
        bookname: '',
        chapter: '',
        sortpubdate: '1978/01/01 00:00',
        sortfirstauthor: 'Abb J',
        vernaculartitle: '',
    },
    '88888': {
        uid: '88888',
        pubdate: '1979 Apr',
        epubdate: '',
        source: 'Agents Actions',
        authors: [
            {
                name: 'Schoetensack B',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Poblete-Freundt G',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Schmutzler W',
                authtype: 'Author',
                clusterid: '',
            },
        ],
        lastauthor: 'Schmutzler W',
        title:
            "The 'calcium gating mechanism' in the anaphylactic histamine release from guinea pig mast cells [proceedings].",
        sorttitle:
            'calcium gating mechanism in the anaphylactic histamine release from guinea pig mast cells proceedings',
        volume: '9',
        issue: '1',
        pages: '61-2',
        lang: ['eng'],
        nlmuniqueid: '0213341',
        issn: '0065-4299',
        essn: '',
        pubtype: ['Journal Article'],
        recordstatus: 'PubMed - indexed for MEDLINE',
        pubstatus: '4',
        articleids: [
            {
                idtype: 'pubmed',
                idtypen: 1,
                value: '88888',
            },
            {
                idtype: 'rid',
                idtypen: 8,
                value: '88888',
            },
            {
                idtype: 'eid',
                idtypen: 8,
                value: '88888',
            },
        ],
        history: [
            {
                pubstatus: 'pubmed',
                date: '1979/04/01 00:00',
            },
            {
                pubstatus: 'medline',
                date: '1979/04/01 00:01',
            },
            {
                pubstatus: 'entrez',
                date: '1979/04/01 00:00',
            },
        ],
        references: [],
        attributes: [],
        pmcrefcount: '',
        fulljournalname: 'Agents and actions',
        elocationid: '',
        doctype: 'citation',
        srccontriblist: [],
        booktitle: '',
        medium: '',
        edition: '',
        publisherlocation: '',
        publishername: '',
        srcdate: '',
        reportnumber: '',
        availablefromurl: '',
        locationlabel: '',
        doccontriblist: [],
        docdate: '',
        bookname: '',
        chapter: '',
        sortpubdate: '1979/04/01 00:00',
        sortfirstauthor: 'Schoetensack B',
        vernaculartitle: '',
    },
    '99999': {
        uid: '99999',
        pubdate: '1978 Oct',
        epubdate: '',
        source: 'Am Heart J',
        authors: [
            {
                name: 'Cottrell JE',
                authtype: 'Author',
                clusterid: '',
            },
            {
                name: 'Turndorf H',
                authtype: 'Author',
                clusterid: '',
            },
        ],
        lastauthor: 'Turndorf H',
        title: 'Intravenous nitroglycerin.',
        sorttitle: 'intravenous nitroglycerin',
        volume: '96',
        issue: '4',
        pages: '550-3',
        lang: ['eng'],
        nlmuniqueid: '0370465',
        issn: '0002-8703',
        essn: '1097-6744',
        pubtype: ['Journal Article'],
        recordstatus: 'PubMed - indexed for MEDLINE',
        pubstatus: '4',
        articleids: [
            {
                idtype: 'pubmed',
                idtypen: 1,
                value: '99999',
            },
            {
                idtype: 'pii',
                idtypen: 4,
                value: '0002-8703(78)90170-9',
            },
            {
                idtype: 'rid',
                idtypen: 8,
                value: '99999',
            },
            {
                idtype: 'eid',
                idtypen: 8,
                value: '99999',
            },
        ],
        history: [
            {
                pubstatus: 'pubmed',
                date: '1978/10/01 00:00',
            },
            {
                pubstatus: 'medline',
                date: '1978/10/01 00:01',
            },
            {
                pubstatus: 'entrez',
                date: '1978/10/01 00:00',
            },
        ],
        references: [],
        attributes: [],
        pmcrefcount: 2,
        fulljournalname: 'American heart journal',
        elocationid: '',
        doctype: 'citation',
        srccontriblist: [],
        booktitle: '',
        medium: '',
        edition: '',
        publisherlocation: '',
        publishername: '',
        srcdate: '',
        reportnumber: '',
        availablefromurl: '',
        locationlabel: '',
        doccontriblist: [],
        docdate: '',
        bookname: '',
        chapter: '',
        sortpubdate: '1978/10/01 00:00',
        sortfirstauthor: 'Cottrell JE',
        vernaculartitle: '',
    },
    '4359000': {
        uid: '4359000',
        pubdate: '2015 Mar 13',
        epubdate: '2015 Mar 13',
        printpubdate: '',
        source: 'PLoS Biol',
        authors: [
            {
                name: 'Head ML',
                authtype: 'Author',
            },
            {
                name: 'Holman L',
                authtype: 'Author',
            },
            {
                name: 'Lanfear R',
                authtype: 'Author',
            },
            {
                name: 'Kahn AT',
                authtype: 'Author',
            },
            {
                name: 'Jennions MD',
                authtype: 'Author',
            },
        ],
        title: 'The Extent and Consequences of P-Hacking in Science',
        volume: '13',
        issue: '3',
        pages: 'e1002106',
        articleids: [
            {
                idtype: 'pmid',
                value: '25768323',
            },
            {
                idtype: 'doi',
                value: '10.1371/journal.pbio.1002106',
            },
            {
                idtype: 'pmcid',
                value: 'PMC4359000',
            },
        ],
        fulljournalname: 'PLoS Biology',
        sortdate: '2015/03/13 00:00',
        pmclivedate: '2015/03/23',
    },
};

export function getFromPubmed(
    kind: 'PMID' | 'PMCID',
    idlist: string,
): Promise<[CSL.Data[], string[]]> {
    return new Promise((resolve, reject) => {
        const payload = <[CSL.Data[], string[]]>idlist
            .split(',')
            .map(id => id.trim())
            .reduce((prev, id) => {
                if (id === 'REJECT') {
                    reject(new Error('Some error occurred'));
                }
                if (id.startsWith('PMC')) {
                    id = id.slice(3);
                }
                return data[id]
                    ? [[...prev[0], parsePubmedJSON(kind, [data[id]])], [...prev[1]]]
                    : [[...prev[0]], [...prev[1], id]];
            }, <[CSL.Data[], string[]]>[[], []]);
        resolve(payload);
    });
}
