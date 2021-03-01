export default function Error({ error }) {

    return (
      <div className="alert alert-danger mt-3 text-center" role="alert">
        Error: {error}
      </div>
    );
}
