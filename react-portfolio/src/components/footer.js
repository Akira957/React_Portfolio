const date = new Date();
const copy = "Copyright @ " + date.getFullYear();

function Footer() {
    return (
        <div id="footer">
            <h2>{copy}</h2>
        </div>
    )
}

export default Footer;