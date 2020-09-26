export interface Game {
    id: number;
    title: string;
    round: number;
    current_active_question_id: number | null;
    current_active_player_id: number | null;
    answer: string;
}