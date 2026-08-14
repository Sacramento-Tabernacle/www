export type Faq = {
  q: string;
  a: string;
  link?: { href: string; label: string; external?: boolean };
};

export const faqs: Faq[] = [
  {
    q: "When do you launch?",
    a: "Sacramento Tabernacle launches January 2027. Between now and then, we're building our launch team, praying together, and getting ready to plant something that lasts.",
  },
  {
    q: "Where will you meet?",
    a: "We're finalizing our home base now and will announce it as soon as it's confirmed. Our desire is to be in the heart of the city.",
  },
  {
    q: "Who's the pastor?",
    a: "James Alexander is the founding pastor of Sacramento Tabernacle, alongside his wife Chelsey. They've felt called to this city as they're building this church with a team of people who share that calling.",
  },
  {
    q: "What do you believe in?",
    a: "John 1:12 says everyone who receives Jesus is given the right to become a child of God. That's where our mission comes from, and it's the foundation of everything we do. We hold to the historic Christian faith and are planted through the Assemblies of God.",
    link: { href: "/statement-of-faith", label: "Read our full Statement of Faith" },
  },
  {
    q: 'What does "A Place of Becoming" mean?',
    a: "We believe becoming takes place as we pursue God, love like Jesus, and sacrifice for purpose. Not becoming a better version of yourself by willpower. Becoming who God actually made you to be.",
  },
  {
    q: "Is there anything for kids?",
    a: "Yes. SacKids is a major part of our design as we build a brand new church. We feel it's our mandate to raise up the next Spirit-filled generation. Kids deserve our best.",
  },
  {
    q: "How can I get involved before launch?",
    a: "Join the launch team. We gather regularly for The Table, a time of worship, vision, and real conversation about what we're building and why. If you want in early, this is the door.",
    link: {
      href: "https://sactabernacle.churchcenter.com/people/forms/1224240",
      label: "Join the launch team",
      external: true,
    },
  },
  {
    q: "Do you have prayer gatherings?",
    a: "Yes, and this is core to who we are. We gather monthly for prayer because we believe a church is formed in prayer before it's built by programs.",
  },
  {
    q: "Is this for me?",
    a: "Yes. We're not building this for people who already have it figured out. We believe God wants to dwell with the people of Sacramento, all of them, the curious, the skeptical, the burned out, and the ones who haven't found a reason to walk through church doors yet.",
  },
  {
    q: "How do I give?",
    a: "Giving is one way we live out Sacrifice for Purpose, one of our core values. It's not a bill, it's a way of surrendering to what God is doing in this city. You can give online anytime.",
    link: {
      href: "https://sactabernacle.churchcenter.com/giving/to/general-tithes-offerings",
      label: "Give online",
      external: true,
    },
  },
];
