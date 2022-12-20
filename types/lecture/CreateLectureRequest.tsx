export interface CreateLectureRequest {
    content: string,
    date: string,
    luckyDate: string,
    period: string,
    place: string,
    target: string,
    teacher: string,
    title: string
}

export interface CreateLectureRequestTemp {
    content: string,
    dateYear: string,
    dateMonth: string,
    dateDay: string,
    luckyDateYear: string,
    luckyDateMonth: string,
    luckyDateDay: string,
    periodYear: string,
    periodMonth: string,
    periodDay: string,
    place: string,
    target: string,
    teacher: string,
    title: string
}
