"use client";

import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, Phone, Plus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { business, menuHighlights } from "@/lib/site";

const inputClass =
  "min-h-12 rounded-md border bg-background px-3 py-2 text-sm font-bold text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/35";

const textareaClass = `${inputClass} min-h-36 resize-y leading-6`;

const pickupTimeKeys = [
  "orderPage.pickupAsap",
  "orderPage.pickup15",
  "orderPage.pickup30",
  "orderPage.pickup45",
  "orderPage.pickup60",
];

export function OrderForm() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupTimeKey, setPickupTimeKey] = useState(pickupTimeKeys[0]);
  const [items, setItems] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const popularItems = useMemo(
    () => menuHighlights.map((item) => `${item.name} ${item.price}`),
    [],
  );

  const addItem = (item: string) => {
    setItems((current) => {
      const nextLine = current.trim() ? `\n${item}` : item;
      return `${current}${nextLine}`;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !items.trim()) {
      setError(t("orderPage.required"));
      setSubmitted(false);
      return;
    }

    const subject = encodeURIComponent(`${t("orderPage.mailSubject")} - ${name.trim()}`);
    const body = encodeURIComponent(
      [
        t("orderPage.mailIntro"),
        "",
        `${t("orderPage.name")}: ${name.trim()}`,
        `${t("orderPage.phone")}: ${phone.trim()}`,
        `${t("orderPage.pickupTime")}: ${t(pickupTimeKey)}`,
        "",
        `${t("orderPage.items")}:`,
        items.trim(),
        "",
        `${t("orderPage.notes")}:`,
        notes.trim() || "-",
        "",
        `${business.name}`,
        business.phoneDisplay,
      ].join("\n"),
    );

    setError("");
    setSubmitted(true);
    window.location.href = `${business.emailHref}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-10 sm:pb-20 lg:pt-12">
      <div className="coastal-wave absolute inset-x-0 top-0 h-24 rotate-180 opacity-45" aria-hidden="true" />
      <div className="confetti-field absolute inset-0 opacity-[0.5]" aria-hidden="true" />
      <div className="container-page relative">
        <div className="grid gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-primary">{t("orderPage.eyebrow")}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              {t("orderPage.title")}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-bold leading-8 text-muted-foreground">
              {t("orderPage.description")}
            </p>
          </div>

          <Card className="relative overflow-hidden bg-[#f5e6d3] shadow-sm">
            <div
              className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--accent),var(--secondary),var(--primary))]"
              aria-hidden="true"
            />
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="size-5 text-primary" aria-hidden="true" />
                {t("orderPage.noticeTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-bold leading-6 text-muted-foreground">
                {t("orderPage.noticeCopy")}
              </p>
              <Button asChild className="mt-5 w-full">
                <a href={business.phoneHref}>
                  <Phone aria-hidden="true" />
                  {t("orderPage.callToConfirm")}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.68fr_0.32fr]">
          <Card className="relative overflow-hidden bg-card/96 shadow-sm">
            <div
              className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--accent),var(--secondary),var(--primary))]"
              aria-hidden="true"
            />
            <CardHeader>
              <CardTitle>{t("orderPage.formTitle")}</CardTitle>
              <p className="text-sm font-bold leading-6 text-muted-foreground">
                {t("orderPage.formDescription")}
              </p>
            </CardHeader>
            <CardContent>
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-black">
                    {t("orderPage.name")}
                    <input
                      className={inputClass}
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder={t("orderPage.namePlaceholder")}
                      autoComplete="name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-black">
                    {t("orderPage.phone")}
                    <input
                      className={inputClass}
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder={t("orderPage.phonePlaceholder")}
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-black">
                  {t("orderPage.pickupTime")}
                  <select
                    className={inputClass}
                    value={pickupTimeKey}
                    onChange={(event) => setPickupTimeKey(event.target.value)}
                  >
                    {pickupTimeKeys.map((key) => (
                      <option key={key} value={key}>
                        {t(key)}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid gap-2">
                  <p className="text-sm font-black">{t("orderPage.popular")}</p>
                  <div className="flex flex-wrap gap-2">
                    {popularItems.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className="inline-flex min-h-10 items-center gap-2 rounded-full border bg-[#f5e6d3] px-3 text-xs font-black text-primary transition-colors hover:border-primary hover:bg-secondary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                        onClick={() => addItem(item)}
                      >
                        <Plus className="size-3.5" aria-hidden="true" />
                        {t("orderPage.add")} {item}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="grid gap-2 text-sm font-black">
                  {t("orderPage.items")}
                  <textarea
                    className={textareaClass}
                    value={items}
                    onChange={(event) => setItems(event.target.value)}
                    placeholder={t("orderPage.itemsPlaceholder")}
                  />
                </label>

                <label className="grid gap-2 text-sm font-black">
                  {t("orderPage.notes")}
                  <textarea
                    className={`${textareaClass} min-h-24`}
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder={t("orderPage.notesPlaceholder")}
                  />
                </label>

                {error ? (
                  <p className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm font-black text-destructive">
                    {error}
                  </p>
                ) : null}

                {submitted ? (
                  <div className="rounded-md border border-accent/25 bg-accent/10 p-4">
                    <p className="flex items-center gap-2 text-sm font-black text-accent">
                      <CheckCircle2 className="size-5" aria-hidden="true" />
                      {t("orderPage.successTitle")}
                    </p>
                    <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
                      {t("orderPage.successCopy")}
                    </p>
                  </div>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" size="lg">
                    <Send aria-hidden="true" />
                    {t("orderPage.submit")}
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={business.phoneHref}>
                      <Phone aria-hidden="true" />
                      {t("orderPage.callToConfirm")}
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-sm">
            <CardHeader className="coastal-hero text-background">
              <CardTitle>{t("cta.viewFullMenu")}</CardTitle>
              <p className="text-sm font-bold leading-6 text-background/75">
                {t("menuPage.chooseCopy")}
              </p>
            </CardHeader>
            <CardContent className="pt-5">
              <div className="space-y-3">
                <Button asChild variant="secondary" className="w-full">
                  <a href="/menu">{t("cta.viewMenu")}</a>
                </Button>
                <Button asChild variant="accent" className="w-full">
                  <a href={`mailto:${business.email}`}>
                    <Mail aria-hidden="true" />
                    {t("orderPage.emailRestaurant")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
