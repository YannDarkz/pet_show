export default interface IPetFormProps {
    onSubmit: (data: { animal: string; name: string; gender: string, life: number, needs: { urine: number, faecs: number}, death: boolean, create: string, update: string }) => void;
}