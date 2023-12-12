import Head from "next/head";


export function HeadBox() {

    const headDescription = `Welcome to Whimsy Cookie Workshop, your cozy hideaway for savoring artisanal cookies and sharing moments with friends`;
    const url = "https://whimsy-cookie-workshop.vercel.app/";
    const title = "Whimsy Cookie Workshop";
    const img =
        "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/hero.png";


    return (
        <Head>
            <title>{title}</title>
            <meta
                name="keywords"
                content="Whimsy Cookie Workshop São Carlos brownies"
            />
            <meta name="description" content={headDescription} />
            <meta name="author" content="Gustavo Sasaki Roncaglia" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={headDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={img} />

            <meta name="twitter:card" content={img} />
            <meta property="twitter:domain" content={url} />
            <meta property="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={headDescription} />
            <meta name="twitter:image" content={img} />
            <link
                rel="icon"
                href="https://cdn-icons-png.flaticon.com/512/7392/7392025.png"
            />
        </Head>
    );
}