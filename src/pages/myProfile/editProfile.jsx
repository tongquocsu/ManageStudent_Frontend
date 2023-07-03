class editProfile extends Component {
    componentDidMount() {
        const id = '64a19ce7ec25f6da85b25979';
        console.log(id)
        axios.get(`http://127.0.0.1:3002/api/v1/teacher/update/${id}`)
        .then(res => {
          const teacher = res.data.teacher.person;
          this.setState({ teacher });
        })
        .catch(error => console.log(error));
      }
 
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

