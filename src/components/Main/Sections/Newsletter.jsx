export default function NewsLetter() {
    return (
        <section className="max-w-[1600px] w-full mx-auto py-8 px-4 text-center">
            <h2 className="font-bold text-2xl pb-2">Sign up for newsletter</h2>
            <p className="pb-4">Do not miss the promotion, get additional discounts</p>
            <form>
                <input type="emial" placeholder="Your e-mail"
                className="p-2 mr-4 bg-gray-100 border-2 border-gray-300"/>
                <button className="bg-black text-white px-6 py-2">Sign in</button>
            </form>
        </section>
    )
}