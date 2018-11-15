class Counter extends React.Component {
    state = {
        counter: 0,
        status: 0
    }

    constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    changeStatus() {
        if (this.state.status === 0) {
            this.setState({
                status: 1
            });
        } else {
            this.setState({
                status: 0
            });
        }
    }

    componentWillMount() {
        console.log('componentWillMount: Za chwilę komponent zostanie utworzony. Stan początkowy - Ilość postów: 0');
    }

    // RENDER

    componentDidMount() {
        console.log('componentDidMount: Komponent został utworzony(model DOM jest gotowy). Przesłano zapytanie - GET do servera o przesłanie listy postów.');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps: Metoda jest wywołana zawsze wtedy, gdy komponent otrzyma nowe właściwości - propsy (z wyjątkiem pierwszego renderowania). Jeśli dodamy nowego posta lub posty wtedy metoda ta zostanie wywołana w celu aktualizacji widoku.');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate: W metodzie tej sprawdzana jest konieczność ponownego renderowania komponentu. Zwraca true lub false. Można ją stosować w celach optymalizacyjnych aplikacji. Domyślnie zwraca true - czyli posty się pojawią.');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate: Na tym etapie mamy dostęp do zmieniającego się stanu i propsów. Nie należy w tej metodzie korzystać z this.setState(infinite loop). Możemy tutaj wykorzystać nadchodzące zmiany np. do określenia wyglądu w zależności od ilości postów.');
        //---- console.log('Stan/Aktualizacja statusu: ' + nextState.status);
        //---- console.log('Stan/Aktualizacja licznika: ' + nextState.counter);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Metoda ta pozwala na załadowanie jakiś zewnętrznych bibliotek. Możemy też zaktualizować style np. dodać coś do nowo dodanych postów.');
        //---- console.log('Poprzednia wartość statusu: ', prevState.status);
        //---- console.log('Poprzednia wartość licznika: ', prevState.counter);
    }

    componentWillUnmount() {
        console.log('Komponent - lista postów zostaje usunięta z widoku.');
    }

    render() {
        return (
            <div>
                <div>
                    <p onClick={this.changeStatus}>Status: {this.state.status}</p>
                    <span>Licznik: {this.state.counter}</span>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>          
        );
    }
};