import './styles.scss';
interface Props {
    show: boolean
}

export default function Nav({ show }: Props) {
    return (
        <div className={`background ${!show ? 'hide' : ''}`}>
            <nav className="nav">
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav >

        </div>

    )

}