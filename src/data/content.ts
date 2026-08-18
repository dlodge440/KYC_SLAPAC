import type { SiteContent } from '../types/content';

export const content: SiteContent = {
  lang: 'en',
  dir: 'ltr',
  ui: {
    searchPlaceholder: 'Search the guidelines…',
    brandT1: 'KYC & Sanctions Compliance',
    brandT2: 'Simpson Marine — internal',
    skipLink: 'Skip to content',
    roleAllLabel: 'All roles',
    nav: {
      groupTools: 'Tools',
      groupReference: 'Reference',
      home: 'Introduction',
      wizard: 'Document checklist wizard',
      calculator: '25% / 50% threshold calculator',
      roleTimeline: 'Role view & timeline',
      faq: 'FAQ',
      kycRequired: 'When KYC is required',
      raci: 'Who does what (RACI)',
      phases: 'The process, phase by phase',
      thresholds: 'Identifying the UBO',
      registries: 'Registries by jurisdiction',
      checklists: 'Document checklists',
      payments: 'Payments',
      screening: 'Screening',
      escalation: 'Escalation',
      toolkit: 'Broker toolkit',
      records: 'Files Management',
    },
    roles: {
      all: 'All roles',
      broker: 'Broker',
      backoffice: 'Back office',
      finance: 'Finance',
      compliance: 'KYC Compliance Officer',
      cso: 'CSO + Assistant',
    },
    common: {
      back: 'Back',
      next: 'Next',
      restart: 'Start over',
      copy: 'Copy to clipboard',
      copied: 'Copied',
      showOnlyRole: "Show only this role's tasks",
      showAll: 'Show all tasks',
      print: 'Print this page',
      source: 'Traceable to',
      offshoreOnly: 'Offshore only',
      validity: 'Validity',
      provesLabel: 'What it proves',
      fromLabel: 'Requested from',
      noResults: 'No results.',
      jumpTo: 'Jump to section',
      reminderTitle: 'Always keep in mind',
      officerReminder:
        'Uncertain cases always go to the KYC Compliance Officer — this tool supports the decision, it is not the final authority.',
      confidential: 'Confidential — internal use only. Never share outside the company.',
      addOwner: '+ Add owner',
      remove: 'Remove',
      markListed: 'Sanctioned / listed subject',
      ofParent: '% of parent',
      person: 'Individual',
      company: 'Company',
      buyer: 'Buyer',
    },
  },
  home: {
    eyebrow: 'Introduction',
    title: 'KYC & Sanctions Compliance Guidelines',
    subtitle: 'Simpson Marine Ltd.',
    issuedLine:
      'Issued under the Sanlorenzo S.p.A. Sanctions Compliance Program (SCP), approved by the Board of Directors on 15 May 2025.',
    version: 'Version 1.0',
    sectionTitle: 'Why this exists',
    body: [
      `Sanlorenzo, as a listed company, has adopted a <strong>Sanctions Compliance Program — the SCP</strong>, a document approved by its Board of Directors that sets out how customer due diligence, identity verification and sanctions screening must be carried out. Those commitments apply to every company in the Sanlorenzo group, Simpson Marine included. The SCP is referred to throughout these guidelines simply as "the SCP".`,
      `In plain terms: before we sell a boat, we must know who is really buying it, and we must be able to prove we checked.`,
      `These guidelines translate the SCP into the steps our brokers, commercial back office and finance teams actually follow. They apply to <strong>all Simpson Marine selling entities across South-East Asia</strong>, without exception, and to <strong>all brands we sell new</strong>, not only Sanlorenzo and Bluegame.`,
    ],
    callouts: [
      {
        type: 'rule',
        html: `<strong>The SCP is an internal document and must never be shared outside the company</strong> — not with clients, not with their advisers, not with counterparties. It is available to Simpson Marine staff in the shared Box folder.`,
      },
      {
        type: 'danger',
        html: `<strong>The one rule nobody may forget:</strong> a boat is never shipped from Italy and never handed over to a client until the KYC file is complete and signed off.`,
      },
    ],
    quickLinksTitle: 'Jump straight to a tool',
    quickLinks: [
      {
        route: 'wizard',
        title: 'Document checklist wizard',
        desc: 'Answer a few questions about the buyer and get the exact document list.',
      },
      {
        route: 'calculator',
        title: '25% / 50% threshold calculator',
        desc: 'Build the ownership chain and get both thresholds calculated correctly — never merged.',
      },
      {
        route: 'role-timeline',
        title: 'Role view & timeline',
        desc: 'Filter everything down to your responsibilities and see the 15-day clock.',
      },
    ],
    footNote:
      'Issued by Simpson Marine under the Sanlorenzo S.p.A. Sanctions Compliance Program. Questions on the application of these guidelines go to the KYC Compliance Officer.',
  },
  faq: {
    title: 'FAQ',
    eyebrow: 'Reference',
    subtitle: 'Searchable answers to the questions that come up most often.',
    items: [
      {
        q: 'Why do we do KYC? How do I explain it to the buyer?',
        a: `Sanlorenzo, as a listed company, has adopted a Sanctions Compliance Program which sets out, among other things, the procedures to be followed for customer due diligence, identity verification and sanctions screening. These commitments apply, under the SCP itself, to all companies within the Sanlorenzo group, including wholly owned subsidiaries such as Simpson Marine. The accurate collection of customer information, and in particular the identification of the ultimate beneficial owner(s) and other persons involved in ownership, control, benefit or use of the vessel, is an essential part of this compliance process, whose purpose is to protect Sanlorenzo from exposure to international sanctions risk. All documents provided are treated as strictly private and confidential and used solely for KYC, sanctions compliance and transaction-related verification purposes.`,
      },
      {
        q: 'What counts as proof of residence?',
        id: 'proofOfResidence',
        a: `Recent — maximum three months — issued by a third party, never self-declared.`,
      },
      {
        q: 'The client signed as an individual but wants the boat registered to a company. What now?',
        a: `That company must go through full KYC before we consent to the assignment. Clause 12.1 of the Standard Terms and Conditions of Sale requires our written consent for any assignment, and consent is not given until the new party's file is complete.`,
      },
      {
        q: "The client's shareholding changed after we signed. Does it matter?",
        a: `Yes. Clause 14.2 of the Standard Terms and Conditions of Sale obliges the client to inform us of any change of beneficial owner. Reopen the file and re-screen.`,
      },
      {
        q: 'The boat is a trade-in that we are reselling. Do we need KYC again?',
        a: `Yes — two files. One on the party who sold the boat to us, one on the party buying it from us. Every time a vessel passes through our ownership, both sides are verified.`,
      },
      {
        q: 'We are selling to a Brand Representative. Full KYC?',
        a: `Simplified. The Brand Representative passed KYC at appointment; keep that confirmation on file. If the last screening is more than 6 months old, re-verify the documents and run the screening again. The register tells you when it was last done.`,
      },
      {
        q: 'Screening came back with a partial name match. What do I do?',
        a: `Nothing on your own. Follow the reading steps under Screening, and if doubt remains, escalate under Track A. Never contact the client about it.`,
      },
      {
        q: 'The client refuses to provide a document.',
        a: `Do not negotiate it yourself and do not let it drift to Day 15. Escalate to the KYC Compliance Officer, who will decide the way forward.`,
      },
    ],
  },
  kycRequired: {
    title: 'When KYC is required',
    eyebrow: 'Reference',
    question: 'When is KYC required?',
    subtitle: 'Filter by situation to see whether a full KYC file is required.',
    alwaysTitle: 'Always required',
    alwaysRows: [
      {
        situation: 'Sale of a new boat, any brand, any Simpson Marine entity',
        requirement: 'Full KYC on the Buyer and its beneficial owners',
      },
      {
        situation: 'Sale to a Brand Representative',
        requirement:
          'Simplified file: the Brand Representative already passed KYC at appointment. Keep that confirmation on file, and re-verify the documents and re-run the screening if the last screening is more than 6 months old',
      },
      {
        situation: 'Trade-in / part-exchange: a used boat enters our ownership',
        requirement:
          'Two separate KYC files — one on the party selling the boat to us, one on the party who buys it from us',
      },
      {
        situation: 'Any party who replaces or is nominated in place of the Buyer before delivery',
        requirement: 'Full KYC on the new party, before consent to the assignment is given',
      },
      {
        situation: 'Registered owner different from the contractual Buyer',
        requirement: 'Full KYC on both',
      },
    ],
    notRequiredTitle: 'Not required',
    notRequiredText: 'Pure brokerage transactions, where ownership does not pass through Simpson Marine.',
    note: {
      type: 'warn',
      html: `Note: even in pure brokerage, if any doubt arises about a counterparty — a name that seems familiar from the news, an opaque structure, an unusual payment route — raise it with the KYC Compliance Officer. Assisting a sanctioned party is itself prohibited, whether or not we take title.`,
    },
  },
  raci: {
    title: 'Who does what',
    eyebrow: 'Guide',
    subtitle: 'The RACI matrix for the KYC process. Select a role above to filter.',
    roleOrder: ['broker', 'backoffice', 'finance', 'compliance', 'cso'],
    officerNote: `KYC Compliance Officer — the internal escalation point between the commercial teams and the Sanlorenzo SCP Unit. Every case that is not straightforward stops here before it goes anywhere else.`,
    tasks: [
      { task: 'Collect information and documents from the client', cells: { broker: 'does' } },
      { task: 'Run screening on the two portals', cells: { backoffice: 'does' } },
      { task: 'Verify documents are valid and complete', cells: { backoffice: 'does' } },
      { task: 'Complete SCP Annex 2 form', cells: { backoffice: 'does' } },
      { task: 'Maintain the file and the KYC register', cells: { backoffice: 'does' } },
      { task: 'Chase the client for missing documents', cells: { broker: 'does', backoffice: 'triggers' } },
      { task: 'Define the authorised payer', cells: { backoffice: 'does', finance: 'consulted' } },
      { task: 'Check the remitter of every incoming payment', cells: { finance: 'does' } },
      {
        task: 'Flag a payment from an unauthorised source',
        cells: { backoffice: 'receives', finance: 'does', compliance: 'informed' },
      },
      {
        task: 'Decide on complex or unclear cases',
        cells: { broker: 'flags', backoffice: 'flags', compliance: 'decides' },
      },
      { task: 'Liaise with the Sanlorenzo SCP Unit', cells: { compliance: 'does', cso: 'informed' } },
      { task: 'Sign off the completed file', cells: { cso: 'does' } },
      { task: 'Transmit the file to the shipyard in Italy', cells: { cso: 'does' } },
    ],
    cellLabel: {
      does: 'Does',
      triggers: 'Triggers',
      consulted: 'Consulted',
      flags: 'Flags',
      receives: 'Receives',
      decides: 'Decides',
      informed: 'Informed',
    },
  },
  phases: {
    title: 'The process, phase by phase',
    eyebrow: 'Guide',
    subtitle: 'Five phases, a 20-day clock from signature, and monitoring that continues until handover.',
    list: [
      {
        id: 'phase0',
        name: 'Phase 0',
        label: 'Preliminary screening',
        timing: 'Before signature',
        html: `
          <p>Triggered as soon as a negotiation moves towards an Order Contract.</p>

          <div class="role-block" data-role="broker">
            <span class="badge role-broker">Broker</span> collects and passes to the back office:
          </div>
          <ul>
            <li>full name, nationality, country of residence</li>
            <li>if a company is buying: company name, country of incorporation, and the expected ultimate beneficial owner</li>
          </ul>

          <div class="role-block" data-role="backoffice">
            <span class="badge role-backoffice">Back office</span> runs those names through the two portals, saves the result as a PDF or screenshot (see the page "Files Management") and opens the entry in the KYC register (shared Excel file, as of now).
          </div>
          <ul>
            <li><strong>Clear</strong> → proceed to signature.</li>
            <li><strong>Possible match</strong> → stop immediately, escalate, and say nothing to the client.</li>
          </ul>

          <p class="muted small">Turnaround: 48 hours. This step is what keeps us aligned with the SCP, which requires due diligence <em>before</em> an agreement is signed.</p>
        `,
      },
      {
        id: 'phase1',
        name: 'Phase 1',
        label: 'Signature',
        timing: 'Day 0',
        html: `
          <p>Clause 14.1 of the Standard Terms and Conditions of Sale must be <strong>completed with the name of the ultimate beneficial owner</strong>. The <span class="field-placeholder">[●]</span> field never goes out blank.</p>

          <p>From the contract date, we have 20 days to complete all the KYC checks and gather the necessary supporting documents.</p>

          <div class="role-block" data-role="broker">
            <span class="badge role-broker">Broker</span> — at signature the broker advises the client to:
          </div>
          <br>
          <div class="callout warn">"Make all payments from the account of the entity that has signed this contract. If funds arrive from anyone else, we are required to run a separate KYC verification."</div>
        `,
      },
      {
        id: 'phase2',
        name: 'Phase 2',
        label: 'Document collection',
        timing: 'Days 0–20',
        html: `
          <div class="role-block" data-role="broker">
            <span class="badge role-broker">Broker</span> sends the document request using the standard template in the Broker toolkit.
          </div>
          <br>
          <div class="role-block" data-role="backoffice">
            <span class="badge role-backoffice">Back office</span>:
          </div>
          <ol>
            <li>tries the <strong>public registry first</strong> (see Registries by jurisdiction) and asks the client only for what the registry does not provide</li>
            <li>checks that every document received is complete, legible and within validity</li>
            <li>completes <strong>Annex 2</strong> of the SCP — the OFAC Identification and Risk Assessment Form</li>
            <li>re-runs the screening on <strong>every name that emerged from the documents</strong>, not only the ones declared in Phase 0: actual beneficial owners, legal representative, registered owner</li>
          </ol>

          <p><strong>Reminder schedule:</strong> Day 5 first reminder · Day 10 second reminder · Day 13 alert to the broker, copied to the KYC Compliance Officer · <strong>Day 15, file not complete → automatic escalation.</strong></p>
        `,
      },
      {
        id: 'phase3',
        name: 'Phase 3',
        label: 'Completion & sign-off',
        timing: '—',
        html: `
          <div class="role-block" data-role="backoffice">
            <span class="badge role-backoffice">Back office</span> assembles the complete file: signed Annex 2, all documents, screening evidence, copy of the contract, authorised payer details.
          </div>
          <br>
          <div class="role-block" data-role="cso">
            <span class="badge role-cso">CSO + Assistant</span> — the file goes digitally to the CSO's assistant, the CSO signs it off. No need to transmit the files to the shipyard in Italy.
          </div>

          <p>The file is now <strong>closed, but not frozen.</strong></p>
        `,
      },
      {
        id: 'phase4',
        name: 'Phase 4',
        label: 'Ongoing monitoring',
        timing: 'Until handover',
        html: `
          <p>Three live controls run from sign-off to handover:</p>

          <div class="role-block" data-role="finance">
            <span class="badge role-finance">Finance</span> checks every payment against the authorised payer (see Payments)
          </div>

          <p><strong>Re-screening</strong> is mandatory if the last screening is more than <strong>6 months old</strong> at the time the shipping request goes to Italy. Documents are already on file — this is only a re-run of the names through the two portals.</p>

          <p><strong>Any change of beneficial owner, or any assignment of the contract</strong>, reopens the file. Clause 14.2 of the Standard Terms and Conditions of Sale obliges the client to inform us of a change of beneficial owner; clause 12.1 of the same terms gives us the right to refuse consent to an assignment, and we use it.</p>
        `,
        callout: { type: 'danger', html: 'No complete KYC file → no shipping request to Italy → no handover.' },
      },
    ],
  },
  thresholds: {
    title: 'Identifying the Ultimate Beneficial Owner (UBO)',
    eyebrow: 'Reference',
    subtitle: 'Two thresholds, two different purposes. Do not confuse them.',
    t25: {
      title: '25% — the identification threshold',
      body: [`This tells us <strong>how far down the chain we dig</strong>. We collect identity documents for:`],
      list: [
        `anyone holding <strong>25% or more</strong> of the buying company, following the chain through intermediate companies down to natural persons`,
        `anyone exercising <strong>control in fact</strong> even below 25% — special voting rights, veto rights, the power to appoint or remove directors`,
        `if nobody reaches 25%, the <strong>senior managing official</strong> or the directors`,
      ],
    },
    t50: {
      title: '50% — the OFAC blocking rule',
      body: [
        `Under OFAC's 50 Percent Rule (statements of 14 February 2008 and 13 August 2014, cited in the SCP), a company owned <strong>50% or more</strong> by one or more listed persons — directly or indirectly, and <strong>adding the stakes together</strong> — is itself blocked, even if its own name appears on no list.`,
        `Three listed persons holding 20%, 20% and 15% add up to 55%. That company is blocked.`,
      ],
    },
    practical: {
      type: 'warn',
      html: `<strong>The practical consequence:</strong> searching the company name on the portals and finding nothing is <strong>not</strong> enough. The shareholders' names must be searched too. This is precisely why we collect the shareholder register and the ownership chart instead of stopping at the company name.`,
    },
    intermediate: {
      type: 'warn',
      html: `If a listed person sits between 25% and 50%, there is no automatic block — but the transaction stops and goes to the KYC Compliance Officer.`,
    },
    calcCta: 'Open the 25% / 50% calculator',
  },
  registries: {
    title: 'Registry first, client second',
    eyebrow: 'Reference',
    subtitle:
      'Public registries often hand us, in a single document and for a few dollars, everything we would otherwise have to extract from the client. The back office always tries the registry first.',
    columns: ['Jurisdiction', 'What we can obtain ourselves', 'Directors + shareholders?'],
    rows: [
      {
        id: 'hk',
        jurisdiction: 'Hong Kong',
        obtainable: 'Annual Return (NAR1) via ICRIS, approx. HK$22 per document',
        coverage: 'Yes — directors, company secretary, members, share capital',
        level: 'yes',
      },
      {
        id: 'sg',
        jurisdiction: 'Singapore',
        obtainable: 'ACRA Business Profile via BizFile / iShop@ACRA, approx. S$5.50',
        coverage: 'Yes — public document, anyone may purchase it',
        level: 'yes',
      },
      {
        id: 'th',
        jurisdiction: 'Thailand',
        obtainable: 'Certified extract from the DBD, paid, 1–3 working days',
        coverage: 'Yes, but only in the certified extract. The free profile is not sufficient',
        level: 'yes',
      },
      {
        id: 'my',
        jurisdiction: 'Malaysia',
        obtainable: 'SSM e-Info, requires a prepaid account',
        coverage: 'Partial — directors yes, shareholders case by case',
        level: 'partial',
      },
      {
        id: 'id',
        jurisdiction: 'Indonesia',
        obtainable: 'AHU Online, basic corporate data',
        coverage: 'No — ownership comes from the Akta, which the client must provide',
        level: 'no',
      },
      {
        id: 'other',
        jurisdiction: 'Taiwan, China, Vietnam, Philippines',
        obtainable: 'Coverage is inconsistent',
        coverage: 'Request from the client',
        level: 'no',
      },
      {
        id: 'offshore',
        jurisdiction: 'Offshore — BVI, Cayman, Marshall Islands, Seychelles, Panama, Belize',
        obtainable: 'Existence and standing of the company only',
        coverage: 'No, in any case',
        level: 'no',
      },
    ],
    warningsTitle: 'Three warnings',
    warnings: [
      `<strong>Offshore registries do not publish ownership by design.</strong> The register of members sits with the registered agent. In the BVI it is filed with the Registrar but on a private basis; in Cayman search reports are purchasable but members remain out of reach. The only route is a <strong>Certificate of Incumbency issued by the registered agent</strong>, requested from the client, and it must be <strong>no more than 3 months old</strong> — it is a snapshot as at its date of issue.`,
      `<strong>The Hong Kong NAR1 is an annual snapshot</strong> and may be up to twelve months old. If the client mentions a change, or the dates do not line up, ask for confirmation of the current position. Hong Kong's Significant Controllers Register, which companies must keep internally, is <strong>not public</strong> — request it from the client where needed.`,
      `<strong>Registries show legal shareholders, not beneficial owners.</strong> If a shareholder is itself a company, keep going up the chain. If a nominee or trustee appears, the registry has done all it can and we go back to the client.`,
    ],
  },
  checklists: {
    title: 'Document checklists',
    eyebrow: 'Reference',
    subtitle: 'Simple copies are accepted. Certified copies are not required.',
    individualTitle: 'Individual buyer',
    individualItems: [
      { name: 'Valid passport', proves: 'Identity', from: 'Client', validity: '—' },
      {
        name: 'Proof of residential address',
        proves: 'Current residential address',
        from: 'Client',
        validity: 'Max 3 months',
      },
    ],
    proofOfResidence: {
      title: 'Proof of residence must be:',
      lead: 'Recent (maximum 3 months old), issued by a third party, not self-declared.',
      acceptable: [
        'Utility bill (electricity, gas, water, landline)',
        'Bank or credit card statement showing the address',
        'Signed or registered lease agreement',
        'Government-issued residence certificate',
        'Bank reference letter confirming the address',
        'Home or motor insurance policy showing the address',
        'Official government correspondence such as a tax document',
      ],
    },
    companyTitle: 'Private company',
    companyStep1: `<strong>Step 1 — back office pulls the registry document.</strong> If it shows directors and shareholders with their stakes, that is the document. Nothing further is asked about the structure.`,
    companyStep2Title: 'Step 2 — request from the client only what is missing:',
    companyStep2: [
      {
        name: 'Certificate of Incumbency',
        detail:
          'Where the company is offshore, or where the registry does not disclose ownership. Dated within the last 3 months.',
      },
      {
        name: 'Ownership chart',
        detail: 'Only where the shareholders of the signing company are not already individuals.',
      },
      {
        name: 'A registry extract or Certificate of Incumbency for each intermediate company',
        detail: 'Appearing on that chart, on any branch leading to an owner we must identify.',
      },
      { name: 'Identity document and proof of residence for every director of the signing company', detail: '' },
      {
        name: 'Passport and proof of residence for every holder of 25% or more, and for anyone exercising control in fact',
        detail: '',
      },
    ],
    reminders: [
      {
        type: 'rule',
        html: `<strong>Directors are documented only at the signing company.</strong> Directors of intermediate holding companies encountered while working up the ownership chain are out of scope — from those companies we take ownership only, not their boards.`,
      },
      {
        type: 'rule',
        html: `<strong>The ownership chart is a map, not evidence.</strong> It tells us where to look and records what the client states the structure to be. Every company on it must then be evidenced by a document of its own — a registry extract where one exists, a Certificate of Incumbency where it does not. Where the chart and the documents disagree, the documents prevail and the case goes to the KYC Compliance Officer.`,
      },
    ],
    howDeepTitle: 'How deep to go',
    howDeep: `Multiply the stakes along each branch: if a company holds 30% of the buyer and an individual holds 50% of that company, that individual's effective holding is 15% and falls below the threshold. Stop documenting a branch once no owner on it can reach 25%.`,
    howDeepWarn: {
      type: 'warn',
      html: `Careful: the <strong>50% blocking rule does not work by multiplication</strong>, it cascades level by level. A listed person owning 50% of a company that owns 50% of the buyer blocks the buyer.`,
    },
    docTableTitle: 'Which corporate document does what',
    docTable: [
      {
        doc: 'Registry extract',
        sub: 'Hong Kong Annual Return (NAR1), Singapore ACRA Business Profile, Thai DBD certified extract, Italian visura camerale',
        proves: 'Current directors and current shareholders with their stakes, and that the company exists',
        when: 'The workhorse. Where obtainable, this single document closes the structure.',
      },
      {
        doc: 'Certificate of Incumbency',
        sub: '',
        proves:
          'The same picture, attested on request and as at its date by the registered agent rather than by a registry: current directors, officers, members, registered office, good standing',
        when: 'Offshore only, where no public registry extract exists. Maximum 3 months old.',
      },
      {
        doc: 'Certificate of Incorporation',
        sub: '',
        proves:
          'Only that the company was created, on a date, under a name and a number. It is issued once and never updated',
        when: 'Not requested. It says nothing about who owns or runs the company today, and existence is already proven by either document above.',
      },
    ],
    listedTitle: 'Company listed on a recognised regulated market',
    listedItems: ['Evidence of the listing and the market', 'Identity documents of the signing directors only'],
    listedNote: 'No need to climb the ownership chain.',
    trustTitle: 'Trust',
    trustItems: [
      'The trust deed of the trust; alternatively relevant extracts, a trustee certificate, or equivalent legal confirmation sufficient to identify the persons connected with the trust',
      'Identification of the settlor, trustee, any protector / guardian / enforcer, the beneficiaries or class of beneficiaries, and any person exercising control or influence over the trust',
      'Passport and proof of residence for each of them',
    ],
    trustNote:
      'A trust structure necessarily requires us to look beyond the corporate chart and understand who stands behind the trust, who may control or influence it, and who will ultimately benefit from or use the vessel.',
    spvTitle: 'SPV or registered owner different from the Buyer',
    spvItems: [
      'Full corporate documentation for the SPV, as per the private company checklist',
      'Documented link between the SPV and the Buyer',
      'Full KYC on both entities',
    ],
  },
  payments: {
    title: 'Payments',
    eyebrow: 'Reference',
    broker: {
      title: 'What the broker does',
      role: 'broker',
      html: `At signature, and again before the first payment falls due, the broker tells the client to pay <strong>only from the account of the entity that signed the contract</strong> — or from the personal account of the individual who signed. Framed as what it is: a way to avoid delay and further questioning. It keeps down the number of documents we have to ask for, which is what clients mind most.`,
    },
    backoffice: {
      title: 'What the back office does',
      role: 'backoffice',
      html: `On closing the file, the back office records the <strong>authorised payer</strong> in the KYC register. At this stage the register is an Excel file shared on Box. It must be readable by finance, otherwise the control cannot physically be performed.`,
    },
    finance: {
      title: 'What finance does',
      role: 'finance',
      html: `On every incoming payment, finance compares the remitter against the authorised payer for that contract.<ul><li><strong>Match</strong> → accept and record.</li><li><strong>No match</strong> → <strong>flag to the back office.</strong> The back office opens a KYC file on the third-party payer and, if anything is unclear, escalates.</li></ul>`,
    },
    cash: { type: 'danger', html: 'No cash. Any refund goes back only to the account the funds came from.' },
    banks: {
      html: 'On banks: where the institution is well known and located in a country not subject to sanctions, no further check is needed. Otherwise the bank is screened on the portals as well.',
    },
  },
  screening: {
    title: 'Screening: how we do it',
    eyebrow: 'Reference',
    sources: [
      { name: 'OFAC Sanctions List Search', url: 'https://sanctionssearch.ofac.treas.gov/' },
      { name: 'EU Sanctions Map', url: 'https://www.sanctionsmap.eu/' },
    ],
    sourcesNote: 'Both are referenced in clause 14.3 of our Standard Terms and Conditions of Sale.',
    evidenceTitle: 'Evidence',
    evidenceHtml: `We do not use a commercial screening tool, so <strong>the evidence is the control</strong>. Every search is saved as a PDF or screenshot showing the search term, the result, the date, and the name of the person who ran it. A search that was not saved did not happen.`,
    readingTitle: 'Reading a result',
    readingSteps: [
      'Compare the name searched against the name on the list. Is one an individual while the other is a vessel, an organisation or a company? Then it is a negative result.',
      'If only part of the name matches — the surname but not the given name, with no spelling discrepancy — it is a negative result.',
      'If there is any further overlap, compare all available identifiers: full name, address, nationality, passport, date and place of birth, known aliases.',
      'If you lack the information to conclude either way, do not conclude. Go back and get more information.',
      'Where there is no reasonable basis to reach a conclusion, or where several identifiers match, the transaction does not proceed.',
    ],
    stopNote: {
      type: 'warn',
      html: 'Stop screening only when you are certain there is no match. Whenever there is doubt, the screening continues.',
    },
    whenTitle: 'When to screen',
    when: [
      'At preliminary stage (Phase 0)',
      'On every name emerging from the documents (Phase 2)',
      'Again before the shipping request, if the last screening is more than 6 months old',
      'On any new party joining the transaction',
      'On a third-party payer',
    ],
  },
  escalation: {
    title: 'Escalation',
    eyebrow: 'Reference',
    subtitle: 'Two tracks. They are not the same and must not be merged.',
    trackA: {
      title: 'Track A',
      sub: 'Suspected sanctions match',
      intro: 'A match, or a possible match, even partial, on either portal.',
      steps: [
        'The transaction stops immediately.',
        'Written notification to the KYC Compliance Officer.',
        'The KYC Compliance Officer notifies the Sanlorenzo SCP Unit in writing at SCPUnit@sanlorenzoyacht.com.',
      ],
      mandatory: 'This is not discretionary — the SCP requires it.',
      note: `<strong>The broker does not inform the client and does not explain the reason for the delay.</strong> If pressed, the only acceptable answer is that the compliance review is still in progress. Never mention sanctions, lists, matches or names.`,
    },
    trackB: {
      title: 'Track B',
      sub: 'Complexity',
      intro:
        "Goes to the KYC Compliance Officer, who decides whether to proceed, request more, or involve the parent company's legal team in Italy.",
      triggersTitle: 'Triggers:',
      triggers: [
        'Opaque or unnecessarily layered corporate structure',
        'Nominee shareholders, fiduciaries, or bearer shares',
        'Refusal or reluctance to disclose the beneficial owner',
        'Payment offered from a third party',
        'Chain of ownership that does not resolve to natural persons',
        'Information from the client inconsistent with the documents',
        'Registered owner or end user different from the Buyer, undisclosed until late',
        'Anything that simply does not add up',
      ],
      note: `The broker has one rule to remember: <strong>when something does not add up, do not solve it alone and do not discuss it with the client.</strong>`,
    },
  },
  toolkit: {
    title: 'Broker toolkit',
    eyebrow: 'Tool',
    subtitle: 'Four ready-to-send templates. Fields in brackets must be completed before sending.',
    templates: [
      {
        id: 't1',
        title: 'Document request — individual buyer',
        subject: 'Documentation required to complete your purchase — [Boat model / Hull no.]',
        body: `Dear [Name],

To finalise the file for the shipyard we need two documents from you:

1. A copy of your passport.
2. A proof of your residential address, issued within the last three months by a third party — for example a utility bill, a bank statement showing your address, a lease agreement, or a government-issued residence certificate. A self-declaration cannot be accepted.

Simple copies by email are fine, no certification is needed.

Sanlorenzo, as a listed company, has adopted a Sanctions Compliance Program which sets out the procedures to be followed for customer due diligence and identity verification. These commitments apply to all companies within the Sanlorenzo group, including Simpson Marine. All documents provided will be treated as strictly private and confidential and used solely for verification purposes in accordance with Sanlorenzo group procedures.

One practical point: please arrange for all payments to be made from the account of the party named in the contract. Payments received from a different source require a separate verification, which would delay your boat.

We would be grateful to receive everything within the next few days, as our internal procedure requires the file to be completed within 15 days of signature.`,
        bodyZh: `尊敬的 [姓名]：

为完成提交船厂的档案，我们需要您提供两份文件：

1. 护照复印件。
2. 居住地址证明，须为三个月内由第三方出具 — 例如公用事业账单、显示您地址的银行对账单、租赁协议或政府签发的居住证明。自行声明恕不接受。

以电子邮件发送普通复印件即可，无需办理认证。

Sanlorenzo（圣劳伦佐）作为一家上市公司，已制定并实施《制裁合规计划》，其中规定了客户尽职调查及身份核实的相关程序。上述要求适用于 Sanlorenzo 集团旗下所有公司，其中包括 Simpson Marine。所有提供的文件均会被严格保密，并仅按照 Sanlorenzo 集团的相关程序用于核实用途。

另有一项实务提示：请安排以合同所载主体名下的账户支付所有款项。若款项来自其他来源，我们须另行核查，将导致交船延误。

恳请您于近日内提供上述文件 — 依据我们的内部程序，档案须在签约后 15 天内完成。`,
      },
      {
        id: 't2',
        title: 'Document request — corporate buyer',
        subject: 'Documentation required to complete your purchase — [Boat model / Hull no.]',
        body: `Dear [Name],

To finalise the file for the shipyard, we need to document the ownership structure of the purchasing company.

Where the information is available from the public company registry, we will obtain it ourselves — there is nothing for you to do on that front. From you we need:

1. [A Certificate of Incumbency issued by the registered agent, dated within the last three months] (offshore companies)
2. [A chart of the ownership structure up to the individual owners, together with a registry extract or Certificate of Incumbency for each company appearing on it] (where the shareholders are not already individuals)
3. A copy of the passport and a proof of residential address for each individual holding 25% or more of the company, and for anyone who controls it in practice.
4. A copy of the passport and a proof of residential address for each director of the purchasing company.

Proof of address must be issued within the last three months by a third party — a utility bill, a bank statement showing the address, a lease agreement or a government residence certificate. Simple copies by email are fine.

Sanlorenzo, as a listed company, has adopted a Sanctions Compliance Program which sets out the procedures for customer due diligence, identity verification and screening. These commitments apply to all companies within the Sanlorenzo group, including Simpson Marine. The accurate identification of the ultimate beneficial owner is an essential part of that process. All documents will be treated as strictly private and confidential and used solely for verification purposes.

Please also arrange for all payments to be made from the account of the company named in the contract — payments from another entity require a separate verification and would delay delivery.

We would be grateful to receive everything within the next few days, as our internal procedure requires the file to be completed within 15 days of signature.`,
        bodyZh: `尊敬的 [姓名]：

为完成提交船厂的档案，我们需要记录购买方公司的股权结构。

凡可从公开公司登记册取得的信息，我们将自行调取 — 该部分无需您费心。需要您提供的包括：

1. [由注册代理人出具、日期在三个月以内的 Certificate of Incumbency]（适用于离岸公司）
2. [追溯至个人层面的股权结构图，并附图中出现的每一家公司的登记册摘录或 Certificate of Incumbency]（适用于股东并非自然人的情形）
3. 持有公司 25% 或以上股权者、以及实际控制公司者的护照复印件及居住地址证明。
4. 购买方公司每一位董事的护照复印件及居住地址证明。

地址证明须为三个月内由第三方出具 — 公用事业账单、显示地址的银行对账单、租赁协议或政府居住证明均可。以电子邮件发送普通复印件即可。

Sanlorenzo（圣劳伦佐）作为一家上市公司，已制定并实施《制裁合规计划》，其中规定了客户尽职调查、身份核实及制裁筛查的相关程序。上述要求适用于 Sanlorenzo 集团旗下所有公司，其中包括 Simpson Marine。准确识别最终实益拥有人是该流程中的重要环节。所有文件均会被严格保密，并仅用于核实用途。

亦请安排以合同所载公司名下的账户支付所有款项 — 由其他主体付款将触发另行核查，并导致交付延误。

恳请您于近日内提供上述文件 — 依据我们的内部程序，档案须在签约后 15 天内完成。`,
      },
      {
        id: 't3',
        title: 'Trust structure',
        subject: '',
        lead: 'Use this when the buyer, or any owner in the chain, turns out to be a trust. Send it as the request itself — it sets out what we need and why.',
        body: `Dear [Name],

As the purchase involves a trust structure, we need the following in order to complete our verification:

The trust deed of [Name of the Trust], in order to identify the ultimate beneficial owner(s) — or, alternatively, relevant extracts, a trustee certificate, or equivalent legal confirmation sufficient to identify the relevant persons connected with the trust, including the settlor, the trustee, any protector, guardian or enforcer, the beneficiaries or class of beneficiaries, and any person exercising control or influence over the trust.

For each of these individuals we will also require a copy of a valid passport and a proof of residential address, such as a recent utility bill or bank statement, in order to complete our verification.

In the case of a trust structure, this necessarily requires us to go beyond the corporate chart and understand who ultimately stands behind the trust, who may control or influence it, who may benefit from it, and who will ultimately benefit from or use the vessel. This is a standard compliance requirement and does not imply any concern regarding the transaction.`,
        bodyZh: `尊敬的 [姓名]：

由于本次购买涉及信托架构，为完成核实程序，我们需要以下资料：

该信托的信托契约（[信托名称]），须能够识别最终实益拥有人（UBO）；或者提供相关摘录、受托人证明书或其他同等法律确认文件，以充分识别与该信托相关的人员，包括委托人（settlor）、受托人（trustee）、任何保护人／监护人／执行监督人（protector / guardian / enforcer）、受益人或受益人类别，以及任何对该信托行使控制或影响力的人员。

对于上述每一位相关人员，我们还需要其有效护照复印件及居住地址证明（例如近期水电费账单或银行对账单），以完成我们的核实程序。

在信托架构下，我们必须超越企业架构图本身，进一步了解该信托背后的实际主体、谁可能对其行使控制或影响、谁可能从中受益，以及最终谁将使用或受益于该船只。这是一项标准的合规要求，并不意味着我们对本次交易存在任何疑虑。`,
      },
      {
        id: 't4',
        title: 'Short chaser',
        subject: '',
        lead: '',
        body: `Dear [Name], a quick reminder on the documents for [Boat model]. We need them to complete the file for the shipyard, and the boat cannot be released until the file is closed. Anything I can help with on my side?`,
        bodyZh: `尊敬的 [姓名]：关于 [船型] 所需文件，谨此提醒。我们需要完成提交船厂的档案，而档案未关闭前船只无法放行。如有任何我可以协助之处，请随时告知。`,
      },
    ],
  },
  records: {
    title: 'Files Management',
    eyebrow: 'Reference',
    whereTitle: 'Where the documents live',
    whereHtml: 'All collected documents go on Box, under:',
    boxPath: 'SA-Sales > SA-KYC',
    folderTitle: 'One folder per transaction, named:',
    folderPattern: 'YYYY MM KYC [Client Name]_[Boat model and hull number]',
    folderBRTitle: 'For a Brand Representative, the folder is named:',
    folderPatternBR: 'YYYY MM KYC BR [Brand Representative name]',
    folderNote: `where <strong>BR</strong> stands for Brand Representative. When a Brand Representative is screened again, <strong>create a new folder</strong> carrying the new dates in its name — the previous folder is left untouched, so the history of each screening stays visible.`,
    registerNote: 'The KYC register is an Excel file shared on Box and tracks the status of every file.',
    retentionTitle: 'Retention',
    retentionHtml: `<strong>5 years</strong>, as required by the SCP. This covers the record of checks and screenings performed, a copy of the contractual documentation, pre-contractual correspondence including electronic, tax documentation, and documentation relating to payments received.`,
    generatorTitle: 'Folder name generator',
    generatorNote: 'For reference only — always create the folder on Box, this does not do it for you.',
    fields: {
      clientName: 'Client name',
      boatModel: 'Boat model / hull no.',
      isBR: 'This is a Brand Representative',
      date: 'Transaction month',
    },
  },
  wizard: {
    title: 'Document checklist wizard',
    eyebrow: 'Tool',
    subtitle:
      'Answer a few questions about the buyer to get the exact list of documents required, with source, and validity.',
    restart: 'Start over',
    step1: {
      title: '1. What type of buyer is this?',
      options: [
        { id: 'individual', title: 'Individual', sub: 'A natural person buying in their own name' },
        { id: 'private', title: 'Private company', sub: 'Not listed on a regulated market' },
        { id: 'listed', title: 'Listed company', sub: 'Listed on a recognised regulated market' },
        { id: 'trust', title: 'Trust', sub: 'Buyer is, or is owned by, a trust' },
        {
          id: 'spv',
          title: 'SPV / registered owner different from Buyer',
          sub: 'A special purpose vehicle or separate registered owner',
        },
      ],
    },
    step2Jurisdiction: {
      title: '2. Where is the company incorporated?',
      sub: 'This tells us whether the public registry already covers shareholders, following the guidance under Registries by jurisdiction.',
    },
    step2Individuals: {
      title: 'Are the shareholders of the signing company already individuals?',
      yes: 'Yes, shareholders are natural persons',
      no: 'No, one or more shareholders are companies (an ownership chart will be needed)',
    },
    step3: {
      title: '3. Is this a trade-in / part-exchange?',
      sub: "A used boat entering Simpson Marine's ownership before this sale.",
      yes: 'Yes, this is a trade-in',
      no: 'No',
    },
    step4: {
      title: '4. Is this a sale to a Brand Representative?',
      yes: 'Yes',
      no: 'No',
      followup: 'Has this Brand Representative been screened in the last 6 months?',
      followupYes: 'Yes, within 6 months',
      followupNo: 'No / not sure',
    },
    resultsTitle: 'Document checklist',
    resultsSub: 'Every item below is traceable to the Document checklists guidance.',
    contextNotesTitle: 'Context notes',
    tradeInNote: {
      type: 'warn',
      html: "This is a trade-in: two separate KYC files are required — one on the party selling the boat to Simpson Marine, and one on the party buying it. (see 'When is KYC required?' in the FAQ)",
    },
    brandRepNote: {
      type: 'rule',
      html: "Sale to a Brand Representative: simplified file. Keep the appointment-time KYC confirmation on file. (see 'When is KYC required?' in the FAQ, and Phase 4 — Ongoing monitoring)",
    },
    brandRepStaleNote: {
      type: 'danger',
      html: "Last screening is more than 6 months old (or unconfirmed): re-verify the documents and re-run the screening before proceeding. (see 'When is KYC required?' in the FAQ, and Phase 4 — Ongoing monitoring)",
    },
    brandRepFreshNote: {
      type: 'rule',
      html: "Screening within the last 6 months: the file on record is sufficient, no re-verification needed. (see 'When is KYC required?' in the FAQ)",
    },
    alwaysReminders: [
      {
        type: 'rule',
        html: 'Directors are documented only at the signing company — directors of intermediate holding companies are out of scope. (see Document checklists)',
      },
      {
        type: 'rule',
        html: 'The ownership chart is a map, not evidence — every company on it still needs its own document. (see Document checklists)',
      },
    ],
    registryFirstNote:
      'Registry first, client second: the back office always tries the public registry before asking the client.',
    docs: {
      passport: { name: 'Valid passport', proves: 'Identity', validity: '—' },
      proofResidence: {
        name: 'Proof of residential address',
        proves: 'Current residential address',
        from: 'Client',
        validity: 'Max 3 months, third party, not self-declared',
      },
      registryDoc: {
        name: 'Registry extract',
        proves: 'Current directors and shareholders with stakes, and that the company exists',
        from: 'Registry (back office)',
        validity: 'Varies — see Registries by jurisdiction',
      },
      coi: {
        name: 'Certificate of Incumbency',
        proves: 'Current directors, officers, members, registered office, good standing — as at date of issue',
        from: 'Client (registered agent)',
        validity: 'Max 3 months',
      },
      chart: {
        name: 'Ownership chart',
        proves: 'Map of the ownership structure to individual owners',
        from: 'Client',
        validity: '—',
      },
      intermediateDocs: {
        name: 'Registry extract or Certificate of Incumbency for each intermediate company',
        proves: 'Existence and, where available, ownership of each company on the chain to an owner we must identify',
        from: 'Registry where obtainable, otherwise client',
        validity: 'CoI max 3 months',
      },
      directorId: {
        name: 'Identity document and proof of residence — every director of the signing company',
        proves: 'Identity of signing-company directors',
        from: 'Client',
        validity: 'Proof of residence max 3 months',
      },
      ownerId: {
        name: 'Passport and proof of residence — every holder of 25%+ / control in fact',
        proves: 'Identity of beneficial owner(s)',
        from: 'Client',
        validity: 'Proof of residence max 3 months',
      },
      listingEvidence: {
        name: 'Evidence of the listing and the market',
        proves: 'That the company is listed on a recognised regulated market',
        from: 'Client',
        validity: '—',
      },
      listedDirectorId: {
        name: 'Identity documents of the signing directors only',
        proves: 'Identity of signing directors',
        from: 'Client',
        validity: '—',
      },
      trustDeed: {
        name: 'Trust deed (or extracts / trustee certificate / equivalent)',
        proves:
          'Identity of settlor, trustee, protector/guardian/enforcer, beneficiaries or class, anyone with control or influence',
        from: 'Client',
        validity: '—',
      },
      trustPersonsId: {
        name: 'Passport and proof of residence for each person connected with the trust',
        proves: 'Identity of settlor, trustee, protector, beneficiaries, controllers',
        from: 'Client',
        validity: 'Proof of residence max 3 months',
      },
      spvDocs: {
        name: 'Full corporate documentation for the SPV',
        proves: 'As per the private company checklist',
        from: 'Registry / client',
        validity: 'See private company checklist',
      },
      spvLink: {
        name: 'Documented link between the SPV and the Buyer',
        proves: 'Relationship between the SPV and the contractual Buyer',
        from: 'Client',
        validity: '—',
      },
      spvBoth: { name: 'Full KYC on both entities', proves: '—', from: '—', validity: 'Both the SPV and the Buyer' },
    },
  },
  calculator: {
    title: '25% / 50% threshold calculator',
    eyebrow: 'Tool',
    subtitle:
      'Build the ownership chain, mark any listed / sanctioned subjects, and see both thresholds calculated — separately, as the SCP requires.',
    intro:
      "Add owners under the Buyer, and under each owner in turn, to reconstruct the chain. Enter each owner's percentage of the entity directly above it.",
    addRootPrompt: "Add the Buyer's direct owners to begin.",
    panel25: {
      title: '25% — identification threshold',
      note: 'Multiplicative down the chain. At or above 25% effective, collect passport + proof of residence. Below 25%, that branch can stop.',
    },
    panel50: {
      title: '50% — OFAC blocking rule',
      note: 'Not multiplicative — cascades level by level, and listed stakes at the same level are added together. A company is blocked once the listed/blocked share of it reaches 50%.',
    },
    verdictAbove: 'Above threshold — Perform further KYC checks',
    verdictBelow: 'Below threshold — no need to identify further on this branch',
    verdictBlocked: 'BLOCKED — 50% or more held (directly or in cascade) by listed subjects',
    verdictFlag:
      'Between 25% and 50% held by a listed subject — no automatic block, but the transaction stops and goes to the KYC Compliance Officer',
    verdictClear: 'No listed subjects on this branch',
    officerNote:
      'This calculator supports the decision. It is not the final authority — uncertain cases always go to the KYC Compliance Officer.',
    resetBtn: 'Reset chain',
  },
  roleTimeline: {
    title: 'Role view & timeline',
    eyebrow: 'Tool',
    subtitle:
      'Select your role above to filter the RACI table and highlight your responsibilities throughout the site. Click a phase below for its detail.',
    timelineTitle: 'The 15-day clock',
    timelineNote:
      'Day 0 is the Contract Date (second signature). Days are calendar days. Click any phase to open its detail below.',
    markers: {
      phase0: 'Before Day 0',
      phase1: 'Day 0 — signature',
      phase2: 'Days 0–15 · reminders Day 5 / 10 / 13, escalation Day 15',
      phase3: 'On completion',
      phase4: 'Until handover · re-screen if screening > 6 months old',
    },
    raciTitle: 'RACI — filtered by role',
    detailTitle: 'Phase detail',
  },
};
