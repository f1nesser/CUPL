import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.js'

function SignUp() {
    return (
        <div style={{ backgroundColor: 'rgb(197, 183, 131)' }}>
            <NavBar />
            <div
                className="container"
                style={{ color: 'rgb(0, 0, 0)', textAlign: 'center' }}
            >
                <h1>CU Powerlifting Login</h1>
            </div>
            <div className="container">
                <form action="">
                    <div
                        className="form-group row"
                        style={{ textAlign: 'center' }}
                    >
                        <label
                            className="col-sm-2 col-form-label"
                            htmlFor="username"
                            style={{
                                color: 'rgb(0, 0, 0)',
                                fontSize: '18px',
                                fontWeight: 'bolder',
                            }}
                        >
                            {' '}
                            Username{' '}
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="username"
                                className="form-control"
                                name="username"
                                id="username"
                                placeholder="Username"
                                style={{
                                    color: 'rgb(0, 0, 0)',
                                    fontSize: '18px',
                                    fontWeight: 'bolder',
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="form-group row"
                        style={{ textAlign: 'center' }}
                    >
                        <label
                            className="col-sm-2 col-form-label"
                            htmlFor="confirm username"
                            style={{
                                color: 'rgb(0, 0, 0)',
                                fontSize: '18px',
                                fontWeight: 'bolder',
                            }}
                        >
                            {' '}
                            Confirm Username{' '}
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="username"
                                className="form-control"
                                name="confirm username"
                                id="confirm username"
                                placeholder="Confirm Username"
                                style={{
                                    color: 'rgb(0, 0, 0)',
                                    fontSize: '18px',
                                    fontWeight: 'bolder',
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="form-group row"
                        style={{ textAlign: 'center' }}
                    >
                        <label
                            className="col-sm-2 col-form-label"
                            htmlFor="Password"
                            style={{
                                color: 'rgb(0, 0, 0)',
                                fontSize: '18px',
                                fontWeight: 'bolder',
                            }}
                        >
                            {' '}
                            Password{' '}
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Password"
                                style={{
                                    color: 'rgb(0, 0, 0)',
                                    fontSize: '18px',
                                    fontWeight: 'bolder',
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="form-group row"
                        style={{ textAlign: 'center' }}
                    >
                        <label
                            className="col-sm-2 col-form-label"
                            htmlFor="Confirm Password"
                            style={{
                                color: 'rgb(0, 0, 0)',
                                fontSize: '18px',
                                fontWeight: 'bolder',
                            }}
                        >
                            {' '}
                            Confirm Password{' '}
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                name="confirm password"
                                id="confirm password"
                                placeholder="Confirm Password"
                                style={{
                                    color: 'rgb(0, 0, 0)',
                                    fontSize: '18px',
                                    fontWeight: 'bolder',
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button
                            className="btn btn-primary btn-block"
                            style={{
                                color: 'rgb(197, 183, 131)',
                                fontSize: '18px',
                                fontWeight: 'bolder',
                                backgroundColor: 'rgb(0, 0, 0)',
                                alignitems: 'center',
                                marginTop: '10px',
                            }}
                        >
                            SignUp{' '}
                        </button>
                    </div>
                </form>
            </div>
            <Image
                src="/Colorado_Buffaloes_logo.svg.png"
                className="avatar"
                alt="logo"
                width={800}
                height={590}
            />
        </div>
    )
}

export default SignUp
