import '../Styles/Notification.css';


function Notification(props) {

    function closeNotification() {
        props.close("")
    }
    return (
        <div className="container">
            <div className="rectangle">
                <div className="notification-text">
                    <span className="fas fa-info-circle"></span>
                    <span>&nbsp;&nbsp;<span>{props.e}</span></span>
                    <span>&nbsp;&nbsp;</span>
                    <span onClick={closeNotification} className='fas fa-times-circle close'></span>
                </div>
            </div>
        </div>
    );
}

export default Notification;
