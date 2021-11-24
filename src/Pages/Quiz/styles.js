export const styles = {
    wrapper: {
        minHeight: "100vh",
    },
    wrapper__container: {
        height: "580px",
        boxShadow: 4,
    },
    container__pagination_block: {
        width: 1 / 2,
    },
    question_block: {
        width: 1,
        backgroundColor: "primary.main",
    },
    question_title: {
        color: "#fff",
        p: "45px 0",
    },
    answers__block: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridRowGap: "1em",
        gridColumnGap: "1em",
    },
    anwer_button: {
        m: "0 auto",
        height: "85px",
        width: "150px",
    },
    navigations_block: {
        width: 1 / 2,
    },
    navigations_block__empty_place: {
        flex: '1 1 auto',
    }
}